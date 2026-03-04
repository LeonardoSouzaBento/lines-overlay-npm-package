# lines-overlay

Esse é um componente React que desenha linhas horizontais sobre a tela para ajudar desenvolvedores front-end a conferir alinhamentos e espaçamentos verticais de elementos de interface. Instale com "npm i lines-overlay -D".

📦 npm: https://www.npmjs.com/package/lines-overlay

---

## Instalação

Com npm:
```bash
npm i lines-overlay -D
```
Ou com pnpm:
```bash
pnpm add lines-overlay -D
```

Este pacote assume que o seu projeto já usa:

- React (>= 18)
- Tailwind CSS (ou classes utilitárias equivalentes, para o estilo do botão/overlay)

---
## Uso básico

```tsx
import { LinesOverlay } from 'lines-overlay';

export function App() {
  return (
    <div>
      {/* Sua interface normal aqui */}
      <LinesOverlay />
    </div>
  );
}
```

Ao incluir o componente `LinesOverlay` em qualquer lugar do seu aplicativo React, um botão “Mostrar linhas” aparece fixo no canto inferior direito.

- **Atalho de teclado**  
- `Ctrl + ;` também alterna entre mostrar/ocultar as linhas.
---

## Controles disponíveis

- **Botão “Mostrar linhas”**  
  - Fica fixo no canto inferior direito.  
  - Alterna a visibilidade das linhas.
  
- **Painel de configuração**  
  - Acessado pelo botão “Configurar” que aparece junto ao overlay.  
  - Permite ajustar:
    - **Linhas**: quantidade de linhas.  
    - **Gap**: espaçamento vertical entre as linhas (em pixels).  
    - **Opacidade**: transparência das linhas.  
    - **Cor**: paleta de cores pré-definidas (azul, amarelo, verde, roxo, etc.).

- **Botão de mover**  
  - Ícone central sobre as linhas.  
  - Permite arrastar o bloco de linhas pela tela para ajustar a posição do grid visual.

---

## Dicas de uso

- Use o `RowGrid` em ambientes de desenvolvimento para checar:
  - Consistência de espaçamentos verticais.
  - Alinhamento de seções em páginas longas.
<!--- Mais tarde haverá colunas de grid também. -->
