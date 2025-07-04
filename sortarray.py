inp = input("enter the numbers: ")
arr = []
for i in inp:
    arr.append(i)
print(arr)

for i in range(len(arr)):
    for j in range(i+1,len(arr)):
        if arr[i]>arr[j]:
            arr[i],arr[j] = arr[j],arr[i]

print(arr)