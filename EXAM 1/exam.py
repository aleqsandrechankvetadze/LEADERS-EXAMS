# task 1

# Sum of Positive Numbers 

# def problem_1_sum_of_positive(arr):
#     sum = 0
#     for i in arr:
#         if i > 0:
#             sum += i

#     print(sum)        


# problem_1_sum_of_positive([])



# task2

# import math

# def problem_2_sum_of_positive(arr):
#     sum = 0
#     for i in arr:
#         if i > 0:
#            sum += math.floor(i)
#     print(sum)

# problem_2_sum_of_positive([-1.5, 2.8, -3.3, 4.8])



# task 3

def find_missing_number(arr):
    n = len(arr) + 1  
    total_sum = n * (n + 1) // 2  
    actual_sum = sum(arr)  
    return total_sum - actual_sum  

# task 4

# def longest_unique_substrig(str):
#     sum = 0
#     for i in str:
#         if i.count(i):
#             sum += 1

#     print(sum)        


# longest_unique_substrig("abcabc") 


## task 5

# def are_anagrams(str1,str2):
#     str1 = str1.lower()
#     str2 = str2.lower()
#     sorted_str1 = sorted(str1)
#     sorted_str2 = sorted(str2)
#     if sorted_str1 == sorted_str2:
#         print("True")
#     else:
#         print("false")    


# are_anagrams("asd", "intghjhl")


# task 6

# def find_intersection(arr1,arr2):
#     sum = []
#     for i in arr1:
#         if i in arr2:
#             sum.append(i)
#     print(sum)

# find_intersection([1, 2, 3], [2, 3, 4])




# task 7


# task 8


# def longest_consecutive(arr):
#     sorted_arr = sorted(arr)
#     new_arr = []
#     length_betw_elems = 1
#     for i in sorted_arr:
#         if i + 1 == sorted_arr[sorted_arr[-1]] + 1:
#             new_arr.append(i)
#             print(len(new_arr))
#         else:
#             print("false")    


# longest_consecutive([100, 4, 200, 1, 3, 2])


# task 9

# def prime_nums(num):
#     if num <= 1:
#         print(True) 

#     for i in range(2, int(num**0.5) + 1):
#         if num % i == 0:
#             print(False)  

#     print(True) 

# def non_prime_numbers(start, end):
#     non_prime_list = []
#     for nums in range(start, end + 1):
#         if not prime_nums(nums):  
#             non_prime_list.append(nums)

#     print(non_prime_list)

# non_prime_numbers(10, 20)
      