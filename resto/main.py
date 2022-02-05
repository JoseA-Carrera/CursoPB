 
ran = int(input("numero de ciclos: "))
div = int(input("numero Fizz: "))
div1 = int(input("numero Buzz: "))



for num in range(1, ran):
	if num % div == 0 and num % div1 == 0:
		print(num, " FizzBuzz")
	elif num % div == 0:
		print(num, " Fizz")
	elif num % div1 == 0:
		print(num, " Buzz")
	else:
		print(num)

