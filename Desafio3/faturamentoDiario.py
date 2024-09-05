import json

# Carregando o arquivo JSON
with open('faturamento.json', 'r') as file:
    dados = json.load(file)

# Filtrando os dias com faturamento
faturamento_diario = [dia['faturamento'] for dia in dados if dia['faturamento'] > 0]

# Calculando o menor e o maior valor de faturamento
menor_faturamento = min(faturamento_diario)
maior_faturamento = max(faturamento_diario)

# Calculando a média mensal de faturamento
media_mensal = sum(faturamento_diario) / len(faturamento_diario)

# Contando o número de dias com faturamento acima da média
dias_acima_da_media = sum(1 for valor in faturamento_diario if valor > media_mensal)

print(f"Menor faturamento: R${menor_faturamento:.2f}")
print(f"Maior faturamento: R${maior_faturamento:.2f}")
print(f"Dias com faturamento acima da média: {dias_acima_da_media} dias")