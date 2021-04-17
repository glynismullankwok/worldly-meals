import axios from 'axios'

    export default {
        getRecipe: function(){
            return axios('/api/recipe')
        }
    }