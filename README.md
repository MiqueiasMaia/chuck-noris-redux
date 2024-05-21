# Instrução

## Configuração Inicial

1. **Mudar a versão do Node para 18**
   Se você ainda não tem a versão 18 do Node instalada, use o `nvm` para mudar de versão ou instalar se necessário:
```bash
   nvm use 18
```

2. **Senão tiver a versão 18 do Node instalada, instale-a com o comando:**
```bash
   nvm install 18
   && nvm use 18
```

2. **Para instalar o pacotes da aplicação**
```bash
   npm install
```

2. **Para rodar a aplicação**
   Para rodar a aplicação em modo de desenvolvimento, use o comando:
```bash
   npm run dev
```

---

# Atenção

Antes de começar, note as seguintes configurações da aplicação:

- **URL de acesso:** A aplicação estará rodando em `http://localhost:5173/`.
- **Thunk:** Já está instalado e configurado.
- **API para piadas:** Utilize o endereço `https://api.chucknorris.io/jokes/random` para buscar piadas. Acesse a documentação completa na [página da API Chuck Norris](https://api.chucknorris.io/).
- **Atualizações automáticas:** A aplicação reinicia automaticamente a cada alteração salva no código.

## Tarefas

Complete as seguintes tarefas:
- [ ] Criar um botão para buscar uma nova piada.
- [ ] Criar uma consulta de uma piada.
- [ ] Guardar a piada no estado.
- [ ] Mostrar a piada na tela.


## Visualização

Veja um [exemplo de como deve ficar](./task/joke.png).
