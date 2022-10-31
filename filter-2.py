def filter_between(values, lower, upper):
    return list(filter(lambda x: x <= upper and x >= lower, values))
