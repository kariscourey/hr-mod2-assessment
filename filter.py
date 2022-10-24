def filter_less_than_or_equal_to(values, threshold):
    # return [i for i in values if i <= threshold]
    return list(filter(lambda x: x <= threshold, values))


values = ["a", "d", "z"]
thresh = "c"
print(filter_less_than_or_equal_to(values, thresh))
