resolver este problema:

Dado um conjunto de inteiros distintos, imprima o tamanho de um subconjunto 
máximo de S onde a soma de quaisquer 2 números em S' não é divisível por k.
Exemplo
S = [19,10,12,10,24,25,22]
k = 4
Uma das matrizes que podem ser criadas são S’[0] = [10,12,25]. Outro 
é S’[1] = [19,22,24]. Depois de testar todas as permutações, o 
subconjunto de comprimento máximo tem 3 elementos.
Sendo assim, o desafio é...
Completar a função calcularSubconjuntoNaoDivisivel que contém os 
seguintes parâmetros:
• S[n]: um array de inteiros.
• K: um divisor inteiro.
E tendo como retorno:
• O tamanho do maior subArray (S’) de S que atende os critérios.
Exemplo de inserção
Ao inserir: 
• S = [1,7,2,4]
• K = 3
A soma de todas as permutações de dois elementos de S = [1,7,2,4] são:
• 1 + 7 = 8 
• 1 + 2 = 3 
• 1 + 4 = 5
• 7 + 2 = 9
• 7 + 4 = 11
• 2 + 4 = 6
Apenas os dados de S’={1,7,4} não irão somar um múltiplo de k = 3, logo, 
o retorno também será 3.