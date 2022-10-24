import json

def has_key(json_string, key_name):
    j_dict = json.loads(json_string)
    return key_name in j_dict


string = '{"name": "Noor"}'
print(has_key(string, "name"))
