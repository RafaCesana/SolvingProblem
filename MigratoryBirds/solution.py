
def migratory_bird():
    arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]
    sorted_arr = sorted(arr)

    # Taking the repetitions
    n = 0
    e = ''
    repeated_times = []
    repeated_elements = []
    for i in range(1, len(sorted_arr)):
        if sorted_arr[i] == sorted_arr[i-1]:
            n = n + 1
            e = sorted_arr[i]
        if sorted_arr[i] != sorted_arr[i-1] or i == len(sorted_arr)-1:
            repeated_times.append(f"{n}")
            repeated_elements.append(f"{e}")
            n = 0

    # Handling with the repetitions
    max_num = 0
    r = 0
    for rt in range(0, len(repeated_times)):
        if int(repeated_times[rt]) > max_num:
            max_num = int(repeated_times[rt])
            r = int(repeated_elements[rt])

    return r


print(migratory_bird())
