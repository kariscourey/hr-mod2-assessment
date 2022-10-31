import json

def key_for_value(json_string, property_value):
    # j_dict = json.loads(json_string)
    # try:
    #     return [i for i in j_dict if j_dict[i] == property_value][0]
    # except:
    #     return None

    j_dict = json.loads(json_string)
    return property_value in j_dict

# def key_for_value(json_string, property_value):
#     j_dict = json.loads(json_string)
#     return [d.get(key) for d in j_dict]

value = '{"name": "Noor"}'
value = '{"age": 23}'
val = 'Noor'

print(key_for_value(value,val))
