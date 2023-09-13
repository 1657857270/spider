from selenium import webdriver


def get_element(driver, *args):
    e = driver.find_element(*args)
    return e
