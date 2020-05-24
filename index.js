function enviar () {
    const data = new FormData(document.getElementById('form'));

    var github = new GitHub({
        username: 'yasminromi',
        password: '',
        auth: 'basic'
    });

    var repository = github.getRepo('yasminromi', 'projeto');

    const str = data.get('email');

    console.log(str)

    repository.writeFile(
        'master', // e.g. 'master'
        'emails/'+str, // e.g. 'blog/index.md'
        str, // e.g. 'Hello world, this is my new content'
        'Novo usuario', // e.g. 'Created new index'

        function(err) {}
     );
}
