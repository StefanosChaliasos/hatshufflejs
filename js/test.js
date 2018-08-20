function decrypt(ciphertexts, sk, table) {
    let vector_ciphers = new Module.Ciphertexts();
    for (var property1 in ciphertexts) {
        for (var property2 in ciphertexts[property1]) {
            vector_ciphers.push_back(ciphertexts[property1][property2][0]);
            vector_ciphers.push_back(ciphertexts[property1][property2][1]);
            vector_ciphers.push_back(ciphertexts[property1][property2][2]);
            vector_ciphers.push_back(ciphertexts[property1][property2][3]);
        }
    }
    sk_neg = "-" + sk
    return Module.decrypt(table, vector_ciphers, sk_neg);
}

// Ugly way to wait Module to load
setTimeout(function(){
    test("Encryption - Decryption", function () {
            keys = Module.keygen();
            sk = keys.split(",")[0];
            pk = keys.split(",")[1];
            vote = "1"
            cipher = Module.vote(pk, vote);
            cipher = cipher.split(',');
            c1 = [cipher[0].split(' ')[1], cipher[0].split(' ')[2],
                  cipher[0].split(' ')[3], cipher[0].split(' ')[4]];
            c2 = [cipher[1].split(' ')[1], cipher[1].split(' ')[2],
                  cipher[1].split(' ')[3], cipher[1].split(' ')[4]];
            ciphertext = [c1, c2];
            ciphertexts = [ciphertext];
            table = Module.create_table(3);
            decrypted_votes = decrypt(ciphertexts, sk, table);
            d_votes = [];
            for (i = 0; i < decrypted_votes.size(); i++) {
                d_votes.push(decrypted_votes.get(i));
            }
            ok(vote, d_votes[0]);
    });
}, 500);
