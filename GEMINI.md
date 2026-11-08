# Diretrizes de Automação do Projeto

## Comando Personalizado: "Upar no Git"

Sempre que o usuário enviar a mensagem **"Upar no Git"** (ou variações como "upar no git", "sobe no git", etc.):

1. Executar `git status` e `git diff` para analisar todas as alterações pendentes.
2. Identificar a natureza das mudanças e gerar uma mensagem de commit clara seguindo a convenção **Conventional Commits**:
   - `feat:` para novas funcionalidades ou adições
   - `fix:` para correções de bugs
   - `style:` para alterações visuais, CSS, formatação
   - `refactor:` para refatoração de código sem alteração de funcionalidade
   - `docs:` para alterações em documentação
   - `chore:` para ajustes em build, dependências ou tarefas secundárias
3. Adicionar os arquivos modificados (`git add`) e executar o commit (`git commit -m "..."`).
4. Realizar o envio para o repositório remoto (`git push origin main`) ou confirmar o status do envio com o usuário.
