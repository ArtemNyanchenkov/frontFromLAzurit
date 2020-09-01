'use strict'
class computerId {
    render () {
        return `
        <div class="computer">
                    <div class="drop" style="left: 100px; "> 
                        <p>User: <span>Симин С.Я.</span> </p> 
                        <p>Inv №: <span>123456</span></p>
                        <form action="">
                            <p>USER</p>
                            <input type="text" >
                            <p>Инв. номер компьютера</p>
                            <input type="text">
                            <button target="_blank">Изменить</button>
                            <p></p>
                        </form>
                    </div>
        </div>
        `;
    }
};

const list = new computerId
list.render();