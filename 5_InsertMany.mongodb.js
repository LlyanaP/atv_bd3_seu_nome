const database = 'bd3_atv2';

const collection = 'bd3_atv2_produtos'

use(database);

db[collection].insertMany(
    [
        {"nome": "Batom Matte", "valor": 29.99, "quantidade_em_estoque": 100, "fabricante": "Marca A", "categoria": "Maquiagem", "descricao": "Batom de longa duração com acabamento matte."},
        {"nome": "Base Líquida", "valor": 89.99, "quantidade_em_estoque": 50, "fabricante": "Marca B", "categoria": "Maquiagem", "descricao": "Base líquida com alta cobertura e efeito natural."},
        {"nome": "Demaquilante", "valor": 39.99, "quantidade_em_estoque": 80, "fabricante": "Marca C", "categoria": "Cuidados", "descricao": "Demaquilante bifásico para todos os tipos de pele."},
        {"nome": "Máscara de Cílios", "valor": 49.99, "quantidade_em_estoque": 150, "fabricante": "Marca D", "categoria": "Maquiagem", "descricao": "Máscara para cílios com efeito volumoso."},
        {"nome": "Sérum Facial", "valor": 89.99, "quantidade_em_estoque": 60, "fabricante": "Marca E", "categoria": "Cuidados", "descricao": "Sérum antienvelhecimento com vitamina C."},
        {"nome": "Creme Hidratante", "valor": 69.99, "quantidade_em_estoque": 70, "fabricante": "Marca F", "categoria": "Cuidados", "descricao": "Creme hidratante para pele seca."},
        {"nome": "Esfoliante Corporal", "valor": 39.99, "quantidade_em_estoque": 90, "fabricante": "Marca G", "categoria": "Cuidados", "descricao": "Esfoliante com partículas naturais para uma pele suave."},
        {"nome": "Protetor Solar", "valor": 59.99, "quantidade_em_estoque": 120, "fabricante": "Marca H", "categoria": "Cuidados", "descricao": "Protetor solar com fator de proteção 50."},
        {"nome": "Paleta de Sombras", "valor": 129.99, "quantidade_em_estoque": 40, "fabricante": "Marca I", "categoria": "Maquiagem", "descricao": "Paleta com 12 cores versáteis."},
        {"nome": "Lápis de Olho", "valor": 29.99, "quantidade_em_estoque": 200, "fabricante": "Marca J", "categoria": "Maquiagem", "descricao": "Lápis de olho à prova d'água."},
        {"nome": "Balm Labial", "valor": 19.99, "quantidade_em_estoque": 300, "fabricante": "Marca K", "categoria": "Cuidados", "descricao": "Balm labial hidratante com sabor."},
        {"nome": "Pó Compacto", "valor": 49.99, "quantidade_em_estoque": 75, "fabricante": "Marca L", "categoria": "Maquiagem", "descricao": "Pó compacto para finalização da maquiagem."},
        {"nome": "Óleo Capilar", "valor": 79.99, "quantidade_em_estoque": 40, "fabricante": "Marca M", "categoria": "Cabelo", "descricao": "Óleo para nutrição intensa dos fios."},
        {"nome": "Condicionador", "valor": 39.99, "quantidade_em_estoque": 60, "fabricante": "Marca N", "categoria": "Cabelo", "descricao": "Condicionador para cabelos secos e danificados."},
        {"nome": "Shampoo Hidratante", "valor": 29.99, "quantidade_em_estoque": 80, "fabricante": "Marca O", "categoria": "Cabelo", "descricao": "Shampoo que hidrata e limpa suavemente."},
        {"nome": "Kit de Maquiagem", "valor": 199.99, "quantidade_em_estoque": 30, "fabricante": "Marca P", "categoria": "Maquiagem", "descricao": "Kit completo com produtos essenciais."},
        {"nome": "Fixador de Maquiagem", "valor": 59.99, "quantidade_em_estoque": 50, "fabricante": "Marca Q", "categoria": "Maquiagem", "descricao": "Spray fixador para maquiagem de longa duração."},
        {"nome": "Máscara Facial", "valor": 19.99, "quantidade_em_estoque": 150, "fabricante": "Marca R", "categoria": "Cuidados", "descricao": "Máscara facial hidratante de argila."},
        {"nome": "Aloe Vera Gel", "valor": 39.99, "quantidade_em_estoque": 90, "fabricante": "Marca S", "categoria": "Cuidados", "descricao": "Gel de aloe vera para acalmar a pele."},
        {"nome": "Spray Refrescante", "valor": 29.99, "quantidade_em_estoque": 100, "fabricante": "Marca T", "categoria": "Cuidados", "descricao": "Spray refrescante para o rosto."},
        {"nome": "Creme para Olhos", "valor": 69.99, "quantidade_em_estoque": 40, "fabricante": "Marca U", "categoria": "Cuidados", "descricao": "Creme para reduzir olheiras e inchaço."},
        {"nome": "Tônico Facial", "valor": 39.99, "quantidade_em_estoque": 80, "fabricante": "Marca V", "categoria": "Cuidados", "descricao": "Tônico para equilíbrio do pH da pele."},
        {"nome": "Gel de Limpeza", "valor": 29.99, "quantidade_em_estoque": 100, "fabricante": "Marca W", "categoria": "Cuidados", "descricao": "Gel de limpeza para rosto com ingredientes naturais."},
        {"nome": "Lima de Unha", "valor": 9.99, "quantidade_em_estoque": 300, "fabricante": "Marca X", "categoria": "Unhas", "descricao": "Lima de unha em vidro para acabamento perfeito."},
        {"nome": "Esmalte", "valor": 19.99, "quantidade_em_estoque": 150, "fabricante": "Marca Y", "categoria": "Unhas", "descricao": "Esmalte de longa duração e secagem rápida."},
        {"nome": "Removedor de Esmalte", "valor": 14.99, "quantidade_em_estoque": 200, "fabricante": "Marca Z", "categoria": "Unhas", "descricao": "Removedor de esmalte com ingredientes hidratantes."},
        {"nome": "Lixa de Pé", "valor": 12.99, "quantidade_em_estoque": 250, "fabricante": "Marca AA", "categoria": "Cuidados", "descricao": "Lixa para pés para uma pele suave."},
        {"nome": "Creme Esfoliante", "valor": 39.99, "quantidade_em_estoque": 90, "fabricante": "Marca AB", "categoria": "Cuidados", "descricao": "Creme esfoliante para o corpo."},
        {"nome": "Óleo de Banho", "valor": 49.99, "quantidade_em_estoque": 70, "fabricante": "Marca AC", "categoria": "Cuidados", "descricao": "Óleo para banho com fragrância suave."},
        {"nome": "Loção Corporal", "valor": 39.99, "quantidade_em_estoque": 100, "fabricante": "Marca AD", "categoria": "Cuidados", "descricao": "Loção corporal hidratante e leve."},
        {"nome": "Pente de Cabelo", "valor": 9.99, "quantidade_em_estoque": 200, "fabricante": "Marca AE", "categoria": "Cabelo", "descricao": "Pente de cabelo para desembaraçar facilmente."},
        {"nome": "Prancha de Cabelo", "valor": 199.99, "quantidade_em_estoque": 25, "fabricante": "Marca AF", "categoria": "Cabelo", "descricao": "Prancha de cabelo com tecnologia de cerâmica."},
        {"nome": "Secador de Cabelo", "valor": 129.99, "quantidade_em_estoque": 35, "fabricante": "Marca AG", "categoria": "Cabelo", "descricao": "Secador potente e leve."},
        {"nome": "Escova de Cabelo", "valor": 19.99, "quantidade_em_estoque": 250, "fabricante": "Marca AH", "categoria": "Cabelo", "descricao": "Escova para alisar e dar volume."},
        {"nome": "Creme para Pentear", "valor": 29.99, "quantidade_em_estoque": 100, "fabricante": "Marca AI", "categoria": "Cabelo", "descricao": "Creme para desembaraçar e definir os fios."},
        {"nome": "Tinta para Cabelo", "valor": 89.99, "quantidade_em_estoque": 40, "fabricante": "Marca AJ", "categoria": "Cabelo", "descricao": "Tinta permanente com ingredientes naturais."},
        {"nome": "Lápis para Sobrancelhas", "valor": 24.99, "quantidade_em_estoque": 150, "fabricante": "Marca AK", "categoria": "Maquiagem", "descricao": "Lápis para definir e preencher sobrancelhas."},
        {"nome": "Pó de Contorno", "valor": 49.99, "quantidade_em_estoque": 80, "fabricante": "Marca AL", "categoria": "Maquiagem", "descricao": "Pó para contorno e definição do rosto."},
        {"nome": "Glitter Corporal", "valor": 19.99, "quantidade_em_estoque": 200, "fabricante": "Marca AM", "categoria": "Maquiagem", "descricao": "Glitter para um brilho extra."},
        {"nome": "Verniz para Unhas", "valor": 15.99, "quantidade_em_estoque": 180, "fabricante": "Marca AN", "categoria": "Unhas", "descricao": "Verniz que oferece acabamento brilhante."},
        {"nome": "Acetona", "valor": 9.99, "quantidade_em_estoque": 300, "fabricante": "Marca AO", "categoria": "Unhas", "descricao": "Acetona para remoção de esmalte."},
        {"nome": "Kit de Unhas Falsas", "valor": 59.99, "quantidade_em_estoque": 45, "fabricante": "Marca AP", "categoria": "Unhas", "descricao": "Kit completo para unhas falsas com cola."},
        {"nome": "Máscara para Cabelo", "valor": 49.99, "quantidade_em_estoque": 60, "fabricante": "Marca AQ", "categoria": "Cabelo", "descricao": "Máscara de hidratação profunda."},
        {"nome": "Spray de Cabelo", "valor": 39.99, "quantidade_em_estoque": 80, "fabricante": "Marca AR", "categoria": "Cabelo", "descricao": "Spray para fixação e definição."},
        {"nome": "Tônico Capilar", "valor": 34.99, "quantidade_em_estoque": 50, "fabricante": "Marca AS", "categoria": "Cabelo", "descricao": "Tônico para fortalecimento dos fios."},
        {"nome": "Lenços Demaquilantes", "valor": 24.99, "quantidade_em_estoque": 200, "fabricante": "Marca AT", "categoria": "Cuidados", "descricao": "Lenços práticos para remoção de maquiagem."},
        {"nome": "Kit de Pincéis de Maquiagem", "valor": 79.99, "quantidade_em_estoque": 35, "fabricante": "Marca AU", "categoria": "Maquiagem", "descricao": "Kit com 10 pincéis de alta qualidade."},
        {"nome": "Esfoliante Facial", "valor": 29.99, "quantidade_em_estoque": 100, "fabricante": "Marca AV", "categoria": "Cuidados", "descricao": "Esfoliante suave para o rosto."},
        {"nome": "Creme Anticelulite", "valor": 69.99, "quantidade_em_estoque": 40, "fabricante": "Marca AW", "categoria": "Cuidados", "descricao": "Creme para auxiliar na redução de celulite."}
    ]    
)