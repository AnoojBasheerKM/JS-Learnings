num = 153
leng = len(str(num))
org = 0

for i in str(num):
    
    org += int(i)**leng
    
print("armstrong" if num==org else "not amstrong")
