# Dados de faturamento por estado
faturamento_estados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

# Calculando o faturamento total
faturamento_total = sum(faturamento_estados.values())

# Calculando a participação percentual de cada estado
percentual_estados = {estado: (valor / faturamento_total) * 100 for estado, valor in faturamento_estados.items()}

# Exibindo os resultados
for estado, percentual in percentual_estados.items():
    print(f"{estado}: {percentual:.2f}%")
