#include <stdio.h>
#include <string.h>

void _0(char _1[], int *_2, int *_3, int *_4) {
    int _5 = 0;

    if (_1[0] == '-') {
        *_4 += 1;
        _5++;
    }

    if (_1[_5] == '\0') {
        *_4 = -1;
        return;
    }

    while (_1[_5++] == '0') {}

    strncat(_1, ".", 2);
    int _6 = --_5;
    int _7 = 0;
    int _8 = 0;

    while (_1[_5] != '.') {
        _7 = _1[_5++] - 48;
        _7 = ~((_7 >> 1) + (_7 - 14)) + 1;

        if ((_7 & 15) != _7) {
            *_4 = -1;
            return;
        }

        _8++;
    }

    *_2 = _8;

    if (_1[++_5] != '\0') {
        while (_1[_5] != '.') {
            _7 = _1[_5++] - 48;
            _7 = ~((_7 >> 1) + (_7 - 14)) + 1;

            if ((_7 & 15) != _7) {
                *_4 = -1;
                return;
            }

            _8++;
        }

        if (_1[_5 + 1] != '\0') {
            *_4 = -1;
            return;
        }

        if (_1[_5 - 1] == '0') {
            while (_1[--_5] == '0') {
                _8--;
            }
        }
    }

    char _9[_8];
    _9[0] = '\0';
    strncat(_9, &_1[_6++], *_2);
    strncat(_9, &_1[*_2 + _6], _8 - *_2);
    _1[0] = '\0';
    strncat(_1, _9, _8);
    *_3 = _8;
}

void _1(int _2[], int *_3, int _4[], int *_5, int *_6) {
    int _7 = *_6;
    int _8 = _7;
    int _9 = _7;
    int _10 = 0;
    int _11 = 0;

    while (*_5 != _7--) {
        _10 = _2[_8] + _4[_9--];
        _11 = _8--;
        _2[_11] = _10;
        _10 -= 10;

        while ((_10 & 15) == _10) {
            _2[_11--] = _10;
            _10 = _2[_11] + 1;
            _2[_11] = _10;
            _10 -= 10;
        }
    }

    if ((*_3 != 0) && (_2[*_3] != 0)) {
        *_3 -= 1;
    }
}

void _2(int _3[], int *_4, int *_5) {
    int _6[*_5];
    int _7 = *_5 + 1;
    int _8 = -1;

    while (_7 != ++_8) {
        _6[_8] = _3[_8];
    }

    _7--;
    int _9 = --_8;
    int _10 = 0;
    int _11 = 0;

    while (*_4 != _7--) {
        _10 = _3[_8] + _6[_9--];
        _11 = _8--;
        _3[_11] = _10;
        _10 -= 10;

        while ((_10 & 15) == _10) {
            _3[_11--] = _10;
            _10 = _3[_11] + 1;
            _3[_11] = _10;
            _10 -= 10;
        }
    }

    if ((*_4 != 0) && (_3[*_4] != 0)) {
        *_4 -= 1;
    }
}

int main(int _3, char *_4[]) {
    if ((_4[1] == (void *)0) || (_4[2] == (void *)0) || (_4[3] == (void *)0)) {
        printf("false");
        return 0;
    }

    int _5 = 0;

    while (_4[1][_5++] != '\0') {}

    char _6[_5 + 1];
    _6[0] = '\0';
    strncat(_6, _4[1], _5);
    int _7 = 0;
    int _8 = 0;
    _0(_6, &_8, &_5, &_7);

    if (_7 == -1) {
        printf("false");
        return 0;
    }

    int _9 = 0;

    while (_4[2][_9++] != '\0') {}

    char _10[_9 + 1];
    _10[0] = '\0';
    strncat(_10, _4[2], _9);
    int _11 = 0;
    _0(_10, &_11, &_9, &_7);

    if ((_7 == -1) || (_9 == 0)) {
        printf("false");
        return 0;
    }

    int _12 = 0;

    while (_4[3][_12++] != '\0') {}

    int _13 = --_12;
    int _14 = ~((_13 >> 1) + (_13 - 14)) + 1;

    if ((_14 & 15) != _14) {
        printf("false");
        return 0;
    }

    _14 = 0;
    int _15 = 0;
    int _16 = 0;
    int _17 = 0;

    while (_12 != _14) {
        _15 = _4[3][_14++] - 48;
        _16 = ~((_15 >> 1) + (_15 - 14)) + 1;

        if ((_16 & 15) != _16) {
            printf("false");
            return 0;
        }

        _16 = _13--;

        while (--_16 != 0) {
            _15 = (_15 << 3) + (_15 << 1);
        }

        _17 += _15;
    }

    if (_5 == 0) {
        printf("0");
        return 0;
    }

    if (_7 == 1) {
        printf("-");
    }

    if ((_9 == 1) && (_10[0] == 49)) {
        if (_5 == _8) {
            printf("%s", _6);
        } else {
            _7 = 0;

            if (_8 == 0) {
                printf("0");
            } else {
                while (_7 != _8) {
                    printf("%c", _6[_7++]);
                }
            }

            printf(".");

            while (_5 != _7) {
                printf("%c", _6[_7++]);
            }
        }

        return 0;
    }

    _7 = _5 - _9;
    _12 = 0;

    if (_7 == 0) {
        _5 = -1;

        while (++_5 != _9) {
            _7 = (_6[_5] - 48) - (_10[_5] - 48);

            if (_7 != 0) {
                if ((_7 & 15) == _7) {
                    _12 = 1;
                }

                _5 = _9 - 1;
            }
        }
    } else {
        _12 = ~_7 / _7;
    }

    if (_12 == 0) { 
        printf("0.");
    }

    // todo
    return 0;
}
