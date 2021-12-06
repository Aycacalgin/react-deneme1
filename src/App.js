
import './App.css';
import './components/FormElementi.js';

function App() {
  return (
    <div className="App">
      <form>
	<h1>Form Elementi</h1>
  <div class="field">
		<label for="Email">Email:</label>
		<input type="text" class="text-center" placeholder="Lütfen e-posta adresinizi giriniz..." />

    </div>
    <div class="field"/>
		<label for="Şifre">Şifre:</label>
		<input type="text"  class="text-center" placeholder="Lütfen şifrenizi giriniz..." />
     </form>
     <input type="checkbox" class="text-center" name="" value="Şifremi hatırla" />
     <label for="Şifremi hatırla">Şifremi hatırla</label>
     
     <button type="Gönder">Gönder</button>
    </div>
  );
}

export default App;
