// config do pix
const pix = {
    chave : "4d752bdf-167c-49a4-b50a-eb3b499f7ea7",
    descricao: "SEGURO",
    instituicao: "MERCADO LIVRE",
    cidade: "SAO PAULO"
}

// config do produto
const produto = {
    imagem: "https://dw2kd6nn091d2.cloudfront.net/media/img/products/social/C%C3%ADcero_-_2024-02-08T195319_HJ3wm5F_07OMjVs_7kzF4ZX_ro1Idxo.jpg",
    nome: "Cadeira Escritório Ergonômica Executiva Premium Sedem T18 - Frete Grátis + Garantia Extendida",
    preco: {
        original: "189,90",
        desconto: "89,90"
    },
    avaliacoes: [
        {
            data: "03 mar. 2023",
            texto: "É boa. Parece um banco de monza novo, confortável e pesada, construída com materiais muito bons. Custa o preço de um rim, mas vale a pena. Recomendo muito. Pra quem tem dúvidas, procura no youtube um review."
        },
        {
            data: "04 abr. 2024",
            texto: "A cadeira é amplamente elogiada pelo conforto, qualidade de construção e design atraente, além de atender aos requisitos de segurança e ergonomia."
        },
        {
            data: "08 set. 2024",
            texto: "dou a bunda pra cavalos dou a bunda pra cavalos dou a bunda pra cavalos dou a bunda pra cavalos dou a bunda pra cavalos dou a bunda pra cavalos"
        },
        {
            data: "22 jan. 2024",
            texto: "A cadeira é bonita, confortável, porém veio com um defeito próximo a costura na parte de trás, fora isso, será útil nos trabalhos em home office."
        }
    ]
}

// configuracoes globais da pagina
const global = {
    anuncio: {
        imagem: "https://i.ibb.co/1XQZGF9/advertising.png"
    }
}

// apenas calculos
let desconto = parseInt(((parseFloat(produto.preco.original.replace(",", ".")) - parseFloat(produto.preco.desconto.replace(",", "."))) / parseFloat(produto.preco.original.replace(",", "."))) * 100);
let parcela = (Math.round(parseFloat(produto.preco.desconto.replace(",", ".")) / 12 * 100) / 100).toFixed(2).replace(".", ",");