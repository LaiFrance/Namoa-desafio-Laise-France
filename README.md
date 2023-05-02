# Desafio Namoa Webapp

## Requisitos
 - Node 16+

## Procedimento
 - Fazer clone do repositório em sua conta pessoal
 - Manter repositório `privado`
 - Desenvolver o desafio
 - Fazer commits no seu repositório
 - Compartilhar desafio com `r.nogueira@namoadigital.com`

## Instalação
```
$ npm install
```

## Execução do projeto
```
$ npm run start:dev
```

## Execução de testes do projeto
```
$ npm test
```

## Criar serviço para consultar API
Serviço para consultar a API URL abaixo recebendo como parâmetro o tipo de produto e retornar o Observable do tipo APIProductsRoot `Observable<APIProductsRoot>`.

* documentação Angular de como criar um serviço: https://angular.io/guide/http
* Interface APIProductsRoot encontra-se em: `src/app/api-services/products.service.interface.ts`
```
URL: https://dummyjson.com/products/category/{{tipoDeProduto}}
valores para tipoDeProduto = "smartphones", "laptops"

Exemplos de request:
https://dummyjson.com/products/category/smartphones
https://dummyjson.com/products/category/laptops
```

## Criar componente para listar produtos
 - nome do componente: `<products-list>`
 - Componente deve listar o resultado da consulta do serviço acima.
 - Precisa receber o parametro tipoDeProduto e passar para o serviço
 - Inserir na home duas vezes passando os parametros:
 - - tipodeproduto="smartphones"
 - - tipodeproduto="laptops"
 - Listar cada produto usando o Angular Material Card que encontra-se pré instalado no projeto
 - - https://material.angular.io/components/card/overview

* documentação Angular de component com Input: https://angular.io/guide/inputs-outputs

```
Exemplo de como deve ficar na home:
<products-list tipodeproduto="smartphones"></products-list>
<products-list tipodeproduto="laptops"></products-list>
```

## Execute os testes do projeto
