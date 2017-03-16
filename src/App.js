import React, { Component } from 'react';
import Header from './Components/Header';
import Button from './Components/Button';
import ErrorMessage from './Components/ErrorMessage';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      err: '', 
      info: 'Created by Michael Lee (vlmlee) © 2017'
    };
    this._update = this._update.bind(this);
    this._example = this._example.bind(this);
    this._clear = this._clear.bind(this);
  }

  componentDidMount() {
    this._example();
  }
  
  _update() {
    try { 
      let textarea = document.getElementById('input').value;
      window.katex.render('\\begin{matrix}' + textarea + '\\end{matrix}', document.getElementById('tex'));
      this.setState({ err: '' });
    } catch (err) {
      this.setState({ err: err.message });
    }
  }

  _clear() {
    document.getElementById('input').value = '';
    document.getElementById('tex').innerHTML = '';
  }

  _example() {
    let textarea = document.getElementById('input');
    textarea.value = 'a^2 + b^2 = c^2 \\\\\\\\\n\nf(x) = 1 + x + x^2 + \\mathcal{O}(x^3) \\\\\\\\\n\n\\int_0^1 e^x dx = e - 1 \\\\\\\\\n\n\\int_a^b u \\frac{d^2v}{dx^2} dx = \\left.u \\frac{dv}{dx} \\right|_a^b - \\int_a^b \\frac{du}{dx} \\frac{dv}{dx} dx';
    window.katex.render('\\begin{matrix}' + textarea.value + '\\end{matrix}', document.getElementById('tex'));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <textarea id="input"
            onChange={this._update}>
          </textarea>
          <pre id="tex">
          </pre>
        </div>
        <Button example={this._example} clear={this._clear} />
        <p className="katex katex-custom">Preview LaTeX using Khan Academy's <a href="https://khan.github.io/KaTeX/" className="katex-link">KaTeX</a> typesetting library!</p>
        <ErrorMessage err={this.state.err} />
        <Footer />
      </div>
    );
  }
}

export default App;
