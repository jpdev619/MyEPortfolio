<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

@vite(['resources/css/app.css'])
<nav>
    <a href="home.blade.php" class="title">My e-<b>Portfolio</b></a>
    <ul class=Select0>
        <li class="Select"><b><a href="{{url('home')}}">Home</a></b></li>
        <li class="Select"><b><a href="{{url('projects')}}">Projects</a></b></li>
        <li class="Select"><b><a href="{{url('skills')}}">Skills</a></b></li>
        <li class="Select"><b><a href="{{url('about')}}">About Me</a></b></li>
        <li class="Select"><b><a href="{{url('contactme')}}">Contact me</a></b></li>
    </ul>

    <div class="toggleswitch">
        <i class="fa fa-sun"></i>
        <i class="fa fa-moon"></i>
    </div>
</nav>

<script>
    const toggleswitch = document.querySelector('.toggleswitch');
    toggleswitch.addEventListener('click', function() {
        document.body.classList.toggle('switch');
    });
</script>