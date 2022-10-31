def key_in_dict(list_of_dicts, key):
    return [True if key in i else False for i in list_of_dicts]


lst = [{"age": 10}, {"remote": False}]
k = "age"
print(key_in_dict(lst,k))
