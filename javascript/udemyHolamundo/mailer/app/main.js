window.onload  = () =>{
    const mailerform = document.getElementById('mailer-form')
    mailerform.onsubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(mailerform)
        const data = Object.fromEntries(formData.entries());
        const response = await fetch('/send',{
            method: 'POST',
            body: data
        }
    }
}
