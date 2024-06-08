document.addEventListener('DOMContentLoaded', function () {
    const songDetails = [
        {
            id: 1,
            title: "Dear God",
            description: "'Dear God' menjadi salah satu lagu populer milik Avengod Sevenfold yang dirilis pada tahun 2009 dengan genre Country Rock.",
            image: "./assets/image/DearGodCover.jpg",
            lyrics: `
                    A lonely road, crossed another cold state line
                    Miles away from those I love, purpose undefined

                    While I recall all the words you spoke to me
                    Can't help but wish that I was there
                    And where I'd love to be, oh yeah

                    Dear God, the only thing I ask of you is
                    To hold her when I'm not around
                    When I'm much too far away

                    We all need that person who can be true to you
                    But I left her when I found her
                    And now I wish I'd stayed

                    'Cause I'm lonely and I'm tired
                    I'm missing you again, oh no
                    Once again

                    There's nothing here for me on this barren road
                    There's no one here while the city sleeps
                    And all the shops are closed

                    Can't help but think of the times I've had with you
                    Pictures and some memories will have to help me through, oh yeah

                    Dear God, the only thing I ask of you is
                    To hold her when I'm not around
                    When I'm much too far away

                    We all need that person who can be true to you
                    I left her when I found her
                    And now I wish I'd stayed

                    'Cause I'm lonely and I'm tired
                    I'm missing you again, oh no
                    Once again

                    Some search, never finding a way
                    Before long, they waste away
                    I found you, something told me to stay
                    I gave in, to selfish ways

                    And how I miss someone to hold
                    When hope begins to fade

                    A lonely road, crossed another cold state line
                    Miles away from those I love, purpose undefined

                    Dear God, the only thing I ask of you is
                    To hold her when I'm not around
                    When I'm much too far away

                    We all need the person who can be true to you
                    I left her when I found her
                    And now I wish I'd stayed

                    'Cause I'm lonely and I'm tired
                    I'm missing you again, oh no
                    Once again
                    `
        },
        {
            id: 2,
            title: "Just The Way Your Are",
            description: "Dalam lagu Just The Way You Are oleh Bruno Mars mengajak kita untuk lebih percaya diri, buat standar kecantikanmu tersendiri dan jangan berpatok pada makna kecantikan secara umum. ",
            image: "./assets/image/just_the_way_you_are.jpg",
            lyrics: `Oh, her eyes, her eyes
                    Make the stars look like they're not shinin'
                    Her hair, her hair
                    Falls perfectly without her tryin'
                    She's so beautiful and I tell her everyday
                    Yeah, I know, I know
                    When I compliment her, she won't believe me
                    And it's so, it's so
                    Sad to think that she don't see what I see
                    But every time she asks me, "Do I look okay?"
                    I say
                    When I see your face
                    There's not a thing that I would change
                    'Cause you're amazing
                    Just the way you are
                    And when you smile
                    The whole world stops and stares for a while
                    'Cause girl, you're amazing
                    Just the way you are
                    Yeah
                    Her lips, her lips
                    I could kiss them all day if she'd let me
                    Her laugh, her laugh
                    She hates, but I think it's so sexy
                    She's so beautiful and I tell her everyday
                    Oh, you know, you know
                    You know I'd never ask you to change
                    If perfect's what you're searchin' for, then just stay the same
                    So don't even bother askin' if you look okay
                    You know I'll say
                    When I see your face
                    There's not a thing that I would change
                    'Cause you're amazing
                    Just the way you are
                    And when you smile
                    The whole world stops and stares for a while
                    'Cause girl, you're amazing
                    Just the way you are
                    The way you are
                    The way you are
                    Girl, you're amazing
                    Just the way you are
                    When I see your face
                    There's not a thing that I would change
                    'Cause you're amazing
                    Just the way you are
                    And when you smile
                    The whole world stops and stares for a while
                    'Cause girl, you're amazing
                    Just the way you are
                    Yeah`
        },
        {
            id: 3,
            title: "Cari Jodoh",
            description: "Cari Jodoh adalah lagu dari band Wali dan masuk dalam album kedua mereka Cari Jodoh. Lagu ini dirilis sebagai single pertama dari album.",
            image: "./assets/image/Cari_Jodoh.jpg",
            lyrics: `Apa salahku? Apa salah ibuku?
                    Hidupku dirundung pilu
                    Tak ada yang mau dan menginginkan aku
                    'Tuk jadi pengobat pilu
                    'Tuk jadi penawar rindu
                    'Tuk jadi kekasih hatiku
                    Timur ke barat, selatan ke utara
                    Tak juga aku berjumpa
                    Dari musim duren hingga musim rambutan
                    Tak kunjung aku dapatkan
                    Tak jua aku temukan
                    Oh, Tuhan, inikah cobaan?
                    Ibu-ibu, Bapak-bapak, siapa yang punya anak?
                    Bilang aku, aku yang tengah malu
                    Sama teman-temanku
                    Kar'na cuma diriku yang tak laku-laku
                    Pengumuman, pengumuman, siapa yang mau bantu?
                    Tolong aku, kasihani aku
                    Tolong carikan diriku kekasih hatiku
                    Siapa yang mau?
                    Timur ke barat, selatan ke utara
                    Tak juga aku berjumpa
                    Dari musim duren hingga musim rambutan
                    Tak kunjung aku dapatkan
                    Tak jua aku temukan
                    Oh, Tuhan, inikah cobaan?
                    Ibu-ibu, Bapak-bapak, siapa yang punya anak?
                    Bilang aku, aku yang tengah malu
                    Sama teman-temanku
                    Kar'na cuma diriku yang tak laku-laku
                    Pengumuman, pengumuman, siapa yang mau bantu?
                    Tolong aku, kasihani aku
                    Tolong carikan diriku kekasih hatiku
                    Siapa yang mau? Uh-uh
                    Ibu, Bapak, punya anak
                    Bilang, bilang aku, aku yang tengah malu
                    Sama teman-temanku
                    Kar'na cuma diriku yang tak laku-laku, wo-o-o-oh
                    Pengumuman, pengumuman, siapa yang mau bantu?
                    Tolong, ah, kasihani aku
                    Tolong, carikan diriku kekasih hatiku
                    Siapa yang mau? Wo-o-o-oh
                    Ku tak laku-laku, wo-o-o-oh
                    Ku tak laku-laku, wo-o-o-oh
                    Ku tak laku-laku`
        }, {
            id: 4,
            title: "Psycho",
            description: "'Psycho' adalah sebuah lagu dan singel yang direkam oleh grup wanita Korea Selatan, Red Velvet. Lagu ini merupakan singel utama dari album kompilasi mereka The ReVe Festival: Finale, yang dirilis bersamaan dengan video klipnya pada 23 Desember 2019.",
            image: "./assets/image/red_velvet___psycho_album_cover_by_souheima_ddnqvlp-pre.jpg",
            lyrics: `Ooh-ooh-ooh, ooh-ooh
                    Hey-yeah, mm, yeah
                    Psycho
                    널 어쩌면 좋을까?
                    이런 맘은 또 첨이라
                    Up and down이 좀 심해
                    조절이 자꾸 잘 안돼
                    하나 확실한 건 I don't play the game
                    우리 진짜 별나대
                    그냥 내가 너무 좋아해
                    넌 그걸 너무 잘 알고 날 쥐락펴락해
                    나도 마찬가지인걸 (oh, oh)
                    우린 참 별나고 이상한 사이야
                    서로를 부서지게 (부서지게)
                    그리곤 또 껴안아 (그리곤 또 껴안아)
                    You got me feeling like a psycho, psycho
                    우릴 보고 말해 자꾸, 자꾸
                    다시 안 볼 듯 싸우다가도
                    붙어 다니니 말야
                    이해가 안 간대
                    웃기지도 않대
                    맞아 psycho (psycho), psycho (psycho)
                    서로 좋아 죽는 바보 (바보), 바보 (바보)
                    너 없인 어지럽고 슬퍼져
                    기운도 막 없어요
                    둘이 잘 만났대
                    Hey, now we'll be okay
                    Hey, trouble 경고 따윈 없이 오는 너
                    I'm original visual
                    우린 원래 이랬어 yeah
                    두렵지는 않아 (흥미로울 뿐)
                    It's hot, let me just hop
                    어떻게 널 다룰까? Ooh
                    어쩔 줄을 몰라 너를 달래고
                    매섭게 발로 차도
                    가끔 내게 미소 짓는 널
                    어떻게 놓겠어 ooh-ooh
                    우린 아름답고 참 슬픈 사이야
                    서로를 빛나게 해 (tell me now)
                    마치 달과 강처럼
                    그리곤 또 껴안아
                    You got me feeling like a psycho, psycho
                    우릴 보고 말해 자꾸, 자꾸
                    다시 안 볼 듯 싸우다가도
                    붙어 다니니 말야
                    이해가 안 간대
                    웃기지도 않대
                    맞아 psycho, psycho (맞아 psycho, psycho)
                    서로 좋아 죽는 바보, 바보 (바보, 바보)
                    너 없인 어지럽고 슬퍼져
                    기운도 막 없어요
                    둘이 잘 만났대
                    Hey, now we'll be okay
                    Don't look back
                    그렇게 우리답게 가보자
                    난 온몸으로 널 느끼고 있어
                    Everything will be okay
                    You got me feeling like a psycho, psycho
                    우릴 보고 말해 자꾸, 자꾸 (ooh)
                    다시 안 볼 듯 싸우다가도
                    붙어 다니니 말야
                    둘이 잘 만났대
                    Hey, now we'll be okay
                    Hey, now we'll be okay (we'll be okay)
                    Hey, now we'll be okay (we'll be okay)
                    Hey, now we'll be okay (we'll be okay)
                    Hey, now we'll be okay (we'll be okay)
                    It's alright
                    It's alright, ooh
                    It's alright, ooh
                    Hey, now we'll be okay (ayy)
                    Hey, now we'll be okay (okay, yeah)
                    Hey, now we'll be okay (ayy)
                    Hey, now we'll be okay (okay)
                    It's alright, oh-whoa
                    It's alright
                    우린 좀 이상해 psycho`
        },
        // Tambahkan detail lagu lainnya di sini
    ];

    // Handle song detail page
    const urlParams = new URLSearchParams(window.location.search);
    const songId = urlParams.get('id');

    if (songId) {
        const song = songDetails.find(song => song.id == songId);
        if (song) {
            document.getElementById('song-detail-title').textContent = song.title;
            document.getElementById('song-detail-description').textContent = song.description;
            document.getElementById('song-detail-image').src = song.image;
            // Pisahkan lirik per kalimat
            const lyrics = song.lyrics.split('\n');
            const lyricsContainer = document.getElementById('song-detail-lyrics');

            lyrics.forEach(lyric => {
                const p = document.createElement('p');
                p.textContent = lyric;
                lyricsContainer.appendChild(p);
            });
        }
    }

    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;

        if (!name || !email || !password || !age || !gender) {
            alert('Semua field harus diisi');
            return;
        }

        if (parseInt(age) < 0) {
            alert('Umur Tidak Boleh Dibawah 0');
            return;
        }

        if (gender !== 'Laki-laki' && gender !== 'Perempuan') {
            alert('Gender harus Laki-laki atau Perempuan');
            return;
        }

        if (parseInt(age) < 1 || parseInt(age) > 150) {
            alert('Umur harus antara 1 dan 150');
            return;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            alert('Format email tidak benar');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password harus memiliki minimal 8 karakter, 1 huruf besar, 1 huruf kecil, dan 1 angka');
            return;
        }

        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(name)) {
            alert('Nama hanya boleh mengandung huruf dan spasi');
            return;
        }

        // Lakukan validasi lainnya dan kirim data ke server

        // Jika semua validasi terpenuhi, maka tampilkan alert berhasil register dan arahkan kembali ke index.html
        alert('Berhasil register!');
        window.location.href = 'index.html';
    });
});

