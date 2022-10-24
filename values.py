def values_for_key(list_of_dicts, key):

    # output = []

    # for i in list_of_dicts:
    #     if key in i:
    #         output.append(i[key])
    #     else:
    #         output.append(None)

    # return output

    return [i[key] if key in i else None for i in list_of_dicts]

dicts = [{"age": 10}, {"remote": False}]
# dicts = [{"age": 10}, {"age": 12}]

print(values_for_key(dicts, "age"))
