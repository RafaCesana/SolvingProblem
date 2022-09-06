import math


def grading_students():
    grades = [73, 67, 38, 33]
    ar = []

    for element in grades:
        if element >= 38:
            rounded_number = _round(element)
            if (rounded_number - element) < 3:
                element = rounded_number
        ar.append(element)
    return ar


def _round(n):
    r_round = math.ceil(n/5)*5
    return r_round


print(grading_students())