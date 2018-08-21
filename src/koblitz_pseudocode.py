#! /usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fenc=utf-8
"""
Pseudocode fo Koblitz algorithm
"""
import random
import argparse
import sys


# This function should check if the given value is the x coordinate of an
# affine point. Here we use it as a dummy helper function.
def is_x_coordinate_in_affine_point(value, h):
    return random.random() <= h


def encoding(k, h, m):
    for m in range(m * k, m * k + k):
        if is_x_coordinate_in_affine_point(m, h):
            # We should return the point of the curve and not the x.
            return m
    try:
        raise Exception('No point founded, you should increase k.')
    except Exception as error:
        print(repr(error))
        sys.exit(1)


def decode(x, k):
    return x / k


def main():
    parser = argparse.ArgumentParser(description='Pseudocode for Koblitz' +
                                     ' algorithm.')
    parser.add_argument('k', type=int, nargs='?', default=10)
    parser.add_argument('h', type=float, nargs='?', default=0.5)
    parser.add_argument('n', help='Number of messages.', type=int, nargs='?',
                        default=5)
    args = parser.parse_args()
    n = args.n
    k = args.k
    h = args.h

    for m in range(n):
        print(25 * "=")
        print('m: ', m)
        x = encoding(k, h, m)
        print('x coordinate:', x)
        decoded = decode(x, k)
        print('decoded m:', decoded)
    print(25 * "=")


if __name__ == "__main__":
    main()
