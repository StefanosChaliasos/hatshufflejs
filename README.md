# hatshufflejs

## Instructions

### MacOS

* Compile

    ```bash
    emcc -O3 -I mcl/include/ -I cybozulib/include/ mcl/src/fp.cpp src/bn_functions.cpp -DNDEBUG -s WASM=1 -s DISABLE_EXCEPTION_CATCHING=0 --bind -o js/functions.js
    ```

* Run

    ```bash
    cd js
    emrun --no_browser --port 8080 --no_emrun_detect .
    ```

    - To run the tests just open http://localhost:8080/test.html.
