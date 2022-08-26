def birthday_cake_candles():
    a = [5, 9, 9, 7, 1, 3]

    # Sorting the array in decreasing order
    a.sort(reverse=True)
    max_element = a[0]

    n = 0
    for element in a:
        if max_element == element:
            n = n + 1

    return n


R = birthday_cake_candles()
print(R)