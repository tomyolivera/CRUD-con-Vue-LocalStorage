const MENSAJE_CONFIRMACION = "¿Realmente querés hacerlo?"
const app = new Vue({
    el: '#app',
    data: {
        tareas: [],
        inputNuevaTarea: '',
        editando: false,
    },
    methods: {
        nuevaTarea(){
            this.tareas.push({
                nombre: this.inputNuevaTarea,
                estado: false,
            });
            this.inputNuevaTarea = '';
            this.setLocalStorage();},
        editarTarea(index){
            if(this.tareas[index].estado){
                this.tareas[index].estado = false
                this.setLocalStorage();
            }else{
                this.tareas[index].estado = true
                this.setLocalStorage();
            }
        },
        eliminarTarea(index){
            // if(confirm(MENSAJE_CONFIRMACION)){
                this.tareas.splice(index, 1);
                this.setLocalStorage();
            // }
        },
        eliminarTodo(){
            // if(confirm(MENSAJE_CONFIRMACION)){
                this.tareas = [];
                this.setLocalStorage();
            // }
        },
        setLocalStorage(){
            localStorage.setItem('tarea-vue', JSON.stringify(this.tareas));
        }
    },
    created: function(){
        let datosLS = JSON.parse(localStorage.getItem('tarea-vue'));
        datosLS === null ? this.tareas = [] : this.tareas = datosLS;
    }
})