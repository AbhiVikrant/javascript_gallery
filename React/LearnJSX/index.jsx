const App = () => <>
      <h1>Why JSX?</h1>
      <ol>
            <li>It helps to couple rendering logic with the UI logic</li>
            <li>It separates concerns instead of separating technologies.</li>
            <li>It helps React to show more useful error and warning messages.</li>
      </ol>
</>;
ReactDOM.createRoot(document.getElementById('root')).render(<App />);