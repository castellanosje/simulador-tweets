<template>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <span class="navbar-brand">Simulador de Tweets</span>
            <button 
                class="btn btn-success pl-4 pr-4 " 
                :class="{ 'btn-success':!showForm, 'btn-danger': showForm }"
                @click="openCloseForm">
                    {{!showForm ? "Nuevo Tweet" : "Cerrar Tweet"}}
                </button>
        </div>
    </nav>
</template>

<script>
import {toRefs} from 'vue'
export default {
    props:{
        showForm: Boolean,
        openCloseForm: Function
    },
    setup(props){
        
        // en esta ocasión desestructuramos aquí porque necesitamos reactividad en showForm
        //por eso usamos toRefs 
        const {showForm} = toRefs(props);
        const {openCloseForm} = props;
        
        return{
            showForm,
            openCloseForm
        }
    }
    
}
</script>

<style>

</style>