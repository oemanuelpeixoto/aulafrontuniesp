
alturas = []
generos = []

for i in range(15):
    altura = float(input(f"Digite a altura da pessoa {i+1} (em metros): "))
    genero = input(f"Digite o gênero da pessoa {i+1} (H para homem, M para mulher): ")
    
    alturas.append(altura)
    generos.append(genero)


maior_altura = max(alturas)
menor_altura = min(alturas)

soma_altura_homens = 0
num_mulheres = 0

for i in range(15):
    if generos[i] == 'H':
        soma_altura_homens += alturas[i]
    elif generos[i] == 'M':
        num_mulheres += 1

media_altura_homens = soma_altura_homens / (15 - num_mulheres)

# Apresente os resultados
print(f"A maior altura do grupo é {maior_altura} metros.")
print(f"A menor altura do grupo é {menor_altura} metros.")
print(f"A média de altura dos homens é {media_altura_homens} metros.")
print(f"O número de mulheres é {num_mulheres}.")
