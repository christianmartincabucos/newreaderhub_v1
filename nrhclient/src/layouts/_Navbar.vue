<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar lighten-1">
        <a class="navbar-brand w-15" style="">
            <img src="../assets/img/nrhub1.png" height="18px">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555" aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ml-5" id="navbarSupportedContent-555">
            <a class="mr-2 text-white"><i class="fas fa-search"></i></a>
            <div class="my-0 w-50">
                <input
                    class="form-control form-control-sm"
                    type="text"
                    placeholder="Search...."
                >
            </div>
            <ul class="navbar-nav ml-5">
                <li class="nav-item mx-1 active">
                    <a class="nav-link" href="#"><i class="far fa-heart "></i>
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link" href="#"><i class="far fa-comment"></i></a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link" href="#"><i class="far fa-id-badge"></i></a>
                </li>
                <li class="nav-item mx-1">
                    <a class="nav-link" id="navbarDropdownMenuLink-555" aria-haspopup="true" aria-expanded="false"><i class="fas fa-home"></i>
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto mr-5 nav-flex-icons">
                <li class="nav-item avatar dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="padding: 0rem 1rem!important;">
                        {{user.name}}
                        <img src="../assets/img/profile-pic.jpg" width="35px" class="rounded-circle z-depth-0" alt="avatar image">
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-55">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>
<style scoped>
    .form-control {
        width: 80%;
        border-radius: 20px;
    }
    i {
        font-size: 1.0rem;
    }
    .input-curve {
        border-radius: 20px;
        background-color: lightgrey;
        color: #fff;
        border: 0px;
    }

    .brand-width {
        width: 15%;
    }

    .navbar{
        padding: .1rem 1rem !important;
    }   
    /* .navbar.navbar-dark .navbar-nav .nav-item .nav-link:hover:not(.active) {
        background-color: dimgray;
    } */
    .nav-item {
        border-radius: 20%;
        border: 0px;
    }
    .nav-link {
        padding: 0.3rem 1rem!important;
    }
    .nav-item:hover:not(:only-child) {
        border: 0px!important;
        border-radius: 20%!important;
        background-color: lightgrey!important;
    }
    @media (min-width: 992px){
        .navbar-expand-lg .navbar-nav .nav-link {
            padding-right: 0.5rem!important;
            padding-left: 0.5rem!important;
        }
    }
    .dimgrey {
        background-color: dimgray;
    }

    .w-15 {
        width: 15%;
    }
</style>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'navbar',
    computed:{
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user',
        }),
    },
}
</script>
