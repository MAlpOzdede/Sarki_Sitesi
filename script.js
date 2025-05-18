 let current = 0;
  const audio = document.getElementById("audio");
  const title = document.getElementById("title");
  const artist = document.getElementById("artist");
  const cover = document.getElementById("cover");
  const playBtn = document.getElementById("play");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const forward5 = document.getElementById("forward5");
  const back5 = document.getElementById("back5");
  const progress = document.getElementById("progress");
  const currentTime = document.getElementById("current-time");
  const duration = document.getElementById("duration");
  const playlist = document.getElementById("playlist");
  const lyricsButton = document.getElementById("lyrics-button");

  // Şarkıların listesi
const songs = [
    {
      title: "The Wonder Of You",
      artist: "Elvis Presley",
      src: "sarkilar/Elvis Presley - The Wonder of You (Official Audio).mp3",
      cover: "kapaklar/indir (1).jpg",
      lyrics: `When no one else can understand me
When everything I do is wrong
You give me love and understanding
All my life, you stood by me

When the world is cold and lonely
You warm my heart, you comfort me
You are always there to lend a hand
In all I do, that's how it is with you

Oh, the wonder of you, the wonder of you
And when no one else can understand me
Oh, the wonder of you, the wonder of you
More than ever, I love you more than ever
And I'll be with you more than ever`
    },
    {
      title: "Soft and Wet",
      artist: "Prince",
      src: "sarkilar/Prince - Soft & Wetto ! (JJBA version+ Lyrics).mp3",
      cover: "kapaklar/indir.jpg",
      lyrics:`Hey, lover, I got a sugarcane
That I want to lose in you
Baby, can you stand the pain?
Hey, lover, sugar don't you see?
There's so many things that you do to me
Ooh, baby
All I want to see is the love in your eyes (hey, lover)
And all I wanna hear is your sweet love sighs
All I wanna feel is a burning flame (hey, lover)
Tell me, tell me, baby, that you feel the same
Tell me that you feel the same way I do
Tell me that you love me, girl
If this is lust, then I must
Confess I feel it every day (every way)
If this is wrong, then I long
To be as far from right as I may
Soft and wet
Soft and wet
Soft and wet
Soft and wet
Every time I'm with you, you just love me to death
Ooh-wee, baby, you leave me without
Breath
Oh, baby, ooh, yeah
You're just as soft as a lion tamed (hey, lover)
You're just as wet as the evening rain
And I really dig it when you call my name (hey, lover)
Your love is driving me
You're driving me insane
Crazy, baby
Oh, girl
Crazy about your love
Soft and wet (you know)
You are soft and wet (oh, sugar)
Your love is soft and wet
Soft and wet`
    },
    {
      title: "Killer Queen (Top Of The Pops, 1974)",
      artist: "Queen",
      src: "sarkilar/Queen - Killer Queen (Top Of The Pops, 1974).mp3",
      cover: "kapaklar/indir (2).jpg",
      lyrics:`She keeps her Moët et Chandon
In her pretty cabinet
"Let them eat cake, " she says
Just like Marie Antoinette
A built-in remedy
For Khrushchev and Kennedy
At anytime an invitation
You can't decline
Caviar and cigarettes
Well versed in etiquette
Extraordinarily nice
She's a Killer Queen
Gunpowder, gelatine
Dynamite with a laser beam
Guaranteed to blow your mind
Anytime
Recommended at the price
Insatiable an appetite
Wanna try?
To avoid complications
She never kept the same address
In conversation
She spoke just like a baroness
Met a man from China
Went down to Geisha Minah
Then again incidentally
If you're that way inclined
Perfume came naturally from Paris (naturally)
For cars she couldn't care less
Fastidious and precise
She's a Killer Queen
Gunpowder, gelatine
Dynamite with a laser beam
Guaranteed to blow your mind
Anytime
Drop of a hat she's as willing as
Playful as a pussy cat
Then momentarily out of action
Temporarily out of gas
To absolutely drive you wild, wild
She's out to get you
She's a Killer Queen
Gunpowder, gelatine
Dynamite with a laser beam
Guaranteed to blow your mind
Anytime
Recommended at the price
Insatiable an appetite
Wanna try?
You wanna try`
    },
    {
      title: "Canzoni Preferite",
      artist: "Bilinmiyor",
      src: "sarkilar/canzoni preferite.mp3",
      cover: "kapaklar/indir (3).jpg",
      lyrics:`Vocal percussion on a whole 'nother level
Coming from my mind
Vocal percussion on a whole 'nother level
Coming from my mind
Ha
We're Golden Wind
Kono me amareri maroreri merare maro
Ha ha
We're Golden Wind
Kono me amareri maroreri merare maro
It's like a burning sunrise
Ahi makareru makare pun pun kete
It's like a burning sunset
Ahi makareru makare pun pun kete
It's like a burning sunrise
Ahi makareru makare pun pun kete
It's like a burning sunset
Ahi makareru makare pun pun kete
Ha
We're Golden Wind
Kono me amareri maroreri merare maro
Ha ha
We're Golden Wind
Kono me amareri maroreri merare maro
Yeah, it's like a Golden Wind
I'm dancing for your mind
I'm shaking like a
Shaking like a
Shaking like a
Shaking like a
Shaking like a burning Golden Wind
Spread wide your Golden Wind
Why don't you dance to swing
I'm swinging like a
Swinging like a
Swinging like a
Swinging like a
Swinging like a shining Golden Wind
Vocal percussion on a whole 'nother level
Coming from my mind
Vocal percussion on a whole 'nother level
Coming from my mind
It's like a burning sunrise`
    },
    {
      title: "SONO CHINO SADAME",
      artist: "JOJO",
      src: "sarkilar/JOJO SONO CHINO SADAME.mp3",
      cover: "kapaklar/indir (4).jpg",
      lyrics:`(JoJo! JoJo! JoJo!)

Sora! Koboreochita futatsu no hoshi ga
Hikari to yami no minamo suikomareteyuku
Hikiau you ni kasanaru hamon

Hokori no michi wo yuku mono ni taiyou no michibiki wo
Yabou no hate wo mezasu mono ni ikenie wo

(JoJo! JoJo! JoJo! JoJo! JoJo!)

Furueru hodo kokoro moetsukiru hodo atsuku
Sono te kara hanate kodou karada minagiru yuuki de
Mayou naki kakugo ni 'Kassai' wo!
~Sono chi no sadame~ JoJo

Sai! Wa nagerareta susumu shika nai
Kimyou na rasen no naka korogaritsuzukeru
Eien wo samayou boukensha

Kyoufu wo mitome tatsu mono ni ougon no tamashii wo
Soshite deatta futari no tame ni tatakai wo

(JoJo! JoJo! JoJo! JoJo! JoJo!)

Maku ga aita you na owarinaki monogatari
Inochi ga butsukaru hibana seishun no hibi wo terase yo
Kimi to iu mirai ni 'Kouun' wo!
~Sono chi no sadame~ JoJo`
    },
    {
      title: "Great Days (Opening 7 - 4K Creditless HD)",
      artist: "JoJo's Bizarre Adventure",
      src: "sarkilar/JoJos Bizarre Adventure  Opening 7 - Great Days  4K Creditless HD.mp3",
      cover: "kapaklar/indir (6).jpg",
      lyrics:`Breakdown, breakdown, listen
Breakdown, breakdown, listen
Breakdown, breakdown
Breakdown, breakdown
(3, 2, 1, let's go!)

Shining justice mebaete
Brand new bed town kousasuru ibuki
Misaki kara shiokaze tonneru nuke tettou e
Hikareai komichi ni mayoikomu

Kokoro ni (Kokoro ni) tokekomu kage
Terasu ougon no "Spirits"
Sore wa mamorinuku hikari

Let the voice of love take you higher
Atsumaru chikara de toki sae koete
Nineteen-ninety-nine bizzare summer
Meguru yuuki de ikiru machi
Great days

Breakdown, breakdown
Breakdown, breakdown
Breakdown, breakdown
Breakdown, breakdown
See upcoming pop shows
Get tickets for your favorite artists

Song of praises hibikase
Brand new up town surechigau keshiki
Kumo no kirema ni sasu hikari ga hora furisosogi
Inishie no komichi e sasoikomu

Kirameki (Kirameki) michibiku machi
Tagiru ougon no "Spirits"
Sore wa hateshinai kizuna

Let the joy of love give you an answer
Wakare no toki sae kudakenu ishi de
Nineteen-ninety-nine bizzare summer
Jibun norikoe tsukami tore mirai

Breakdown, breakdown
Breakdown, breakdown

Let the voice of love take you higher
Atsumaru chikara de toki sae koete
Let the joy of love give you an answer
Wakare no toki sae kudakenu ishi de
Nineteen-ninety-nine bizzare summer
Kawasu yuuki ga umu sanka
Great days

Breakdown, breakdown
Breakdown, breakdown
Breakdown, breakdown
Breakdown, breakdown`,

    },
    {
      title: "Diamond is Unbreakable - Opening 1 (Creditless)",
      artist: "JoJo's Bizarre Adventure",
      src: "sarkilar/Jojos Bizarre Adventure Diamond is Unbreakable - Opening 1 (Creditless)  [HD].mp3",
      cover: "kapaklar/indir (5).jpg",
      lyrics:`Surechigatteku kao no nai shisen
Mune no ana ga kaetetta nichijou
Kyoukai nante naku deau atarimae no kimyou
Uh-yeah

Itsumo doori no asa ga
Uwatsura de warau
Shoutai fumei no mama
Hikareru mystery
Hajimari mo iwazu
Jitto hisonderu
Kono machi no doko ka

Dakedo kyou mo joujou ni
Monku nanka ii atte
Nichijou o odoru
Crazy noisy bizarre town

Shinaru yumi ga ayashiku uranau
Tsuranuku ya de tamesu kanousei
Ryoukai nante nai umareru sainou ni kikunda
Uh-yeah
See upcoming pop shows
Get tickets for your favorite artists

You might also like
Karen Aoki & Daisuke Hasegawa - Great Days (Romanized)
Genius Romanizations
Coda - BLOODY STREAM (Romanized)
Genius Romanizations
​batta - chase (Romanized)
Genius Romanizations

Okubyou wo kakushin wa
Chinmoku wo yaburu
Migatte na kurai ni
Musubareru destiny
Sugu soba ni iru ze
Jitto me wo kogorasu
Kono machi no kehai

Dakedo kyou mo joujou ni
Jooku nanka ii atte
Oretachi de odore
Crazy noisy bizarre town

Dakedo kyou mo joujou ni
Monku nanka ii atte
Nichijou o odoru
Crazy noisy bizarre town
Dakedo kyou mo joujou ni
Jooku nanka ii atte
Oretachi de odore
Crazy noisy bizarre town`
    },
    {
      title: "OP 2 UHD 2160p Creditless",
      artist: "JoJo's Bizarre Adventure",
      src: "sarkilar/Jojos Bizarre Adventure OP 2  UHD 2160p  Creditless.mp3",
      cover: "kapaklar/indir (7).jpg",
      lyrics:`Shijima no soko kara
Mezameru sono hashiratachi toki wo koe
Shinku no chishio ga tachiagaru yuuki wo
Hikiawaseru

Uketsugu ai wo sadame to yobu nara
Hohoemu me de tsugi no te wo

Yami wo azamuite setsuna wo kawashite
Yaiba surinuke yatsura no suki wo tsuke
Tsuranuita omoi ga mirai wo hiraku
Like a bloody storm, atsuku like a bloody stone
Ketsumyaku ni kizamareta innen ni
Ukiagaru kienai hokori no kizuna nigirishimete

Minagiru chikara ni uchitsukeru kodou wa akashi tomo no koe
Nijinda itami to ima ikinuku imi wo kawashi nagara


Omae no ishi ga yoake wo michibiku
Mabayui hodo no kedakasa de
See upcoming pop shows
Get tickets for your favorite artists

Hikari sasu oka e shakunetsu no sora e
Tamashii ga butsukariau tabiji e
Kanashimi ni nurareta mirai wo sukue
Like a bloody soul, moyase like a bloody star
Honou saki kaze wo tachi sono saki e
Osorezu ni nani mo tamerawazu susume nagare no naka

Kyoumei suru unmei no hamon kokoro ni

Yami wo azamuite setsuna wo kawashite
Yaiba surinuke yatsura no suki wo tsuke
Tsuranuita omoi ga mirai wo hiraku
Like a bloody storm, atsuku like a bloody stone
Ketsumyaku ni kizamareta innen ni
Ukiagaru kienai hokori no kizuna nigirishimete`,
 },
    {
      title: "STAND PROUD (Opening 3)",
      artist: "JoJo's Bizarre Adventure",
      src: "sarkilar/JoJos Bizarre Adventure Opening 3 STAND PROUD.mp3",
      cover: "kapaklar/indir (8).jpg",
      lyrics:`Soshite tsudoishi stardust
Hyakunen me no mezame ni yobarete
Otokotachi wa mukau
Toki no suna wo koeru journey

Kusari no yo tsuranaru karami au karuma
Hikari de tatsu sadame

Stand up! Stand up! Stand up!
Uchikomu no wa
All right now! All right now! All right now!
Hokori no bullet
(JOJO! JOJO! JOJO!)
Break you down! Break you down! Break you down!
Kobushi hanatsu seinaru vijon
Stand proud!

Tojirareteta 'toki' ni
Hi no hikari abiseru no wa dare da
Mirai nokosu kibou
Nagareru hoshi no kuruseidaasu

Kakeru no wa inochi mamoru beki ai to
Tarot wa kubarareta

Stand up! Stand up! Stand up!
Tachihadakaru
All right now! All right now! All right now!
Teki wo taoshi
(JOJO! JOJO! JOJO!)
Break you down! Break you down! Break you down!
Michi wo hiraku tamashi no vijon
Stand proud!

Yami no naka warau senaka wo
Sagashi oimotomeru otoko no
Sono ashioto rekuiemu
Sabaku ni hibiku

Stand up! Stand up! Stand up!
Uchikomu no wa
All right now! All right now! All right now!
Hokori no Bullet
(JOJO! JOJO! JOJO!)
Break you down! Break you down! Break you down!
Kobushi hanatsu seinaru vijon
Stand proud!
Stand up! Stand up! Stand up!
Tachihadakaru
All right now! All right now! All right now!
Teki wo taoshi
(JOJO! JOJO! JOJO!)
Break you down! Break you down! Break you down!
Michi wo hiraku tamashi no vijon
Stand proud!`
    },
    {
      title: "Pillar Men Theme『Awaken』",
      artist: "JoJo's Bizarre Adventure OST",
      src: "sarkilar/JoJos Bizarre Adventure OST - Pillar Men Theme『Awaken』.mp3",
      cover: "kapaklar/indir (9).jpg",
      lyrics:`Ayayayayayay
Come on, hey, woah
Come on, hey, yeah
Come on, hey, woah
Come on, hey
Come on, come on, hey
Come on, hey, woah
Come on, hey, yeah
Come on, hey, woah
You thought you hot shit
I′ll let you know
What?
What?
What?
Hey
What
Come on
What
Come on
What
Go
Go
Go
Go
Come on, hey, woah
Come on, hey, yeah
Come on, hey, woah
Come on, hey
Come on, come on, hey
Come on, hey, woah
Come on, hey, yeah
Come on, hey, woah
You thought you hot shit
I'll let you know
Hey, hey, hey, hey, hey, hey, hey, hey
Hey, hey, hey, hey, hey, hey, hey, hey
Come on, hey, woah
Come on, hey, yeah
Come on, hey, woah
Come on, hey
Come on, come on, hey
Come on, hey, woah
Come on, hey, yeah
Come on, hey, woah
Come on, come on, hey
Come on, hey, woah
Come on, hey, yeah
Come on, hey, woah
You thought you hot shit
I′ll let you know`
    },
    {
      title: "Beat It (Official 4K Video)",
      artist: "Michael Jackson",
      src: "sarkilar/Michael Jackson - Beat It (Official 4K Video).mp3",
      cover: "kapaklar/indir (11).jpg",
      lyrics:`They told him, "Don't you ever come around here"
"Don't wanna see your face, you better disappear"
The fire's in their eyes and their words are really clear
So beat it, just beat it
You better run, you better do what you can
Don't wanna see no blood, don't be a macho man
You wanna be tough, better do what you can
So beat it, but you wanna be bad
Just beat it (beat it), beat it (beat it)
No one wants to be defeated
Showin' how funky and strong is your fight
It doesn't matter who's wrong or right
Just beat it (beat it)
Just beat it (beat it)
Just beat it (beat it)
Just beat it (beat it, uh)
They're out to get you, better leave while you can
Don't wanna be a boy, you wanna be a man
You wanna stay alive, better do what you can
So beat it, just beat it
You have to show them that you're really not scared
You're playin' with your life, this ain't no truth or dare
They'll kick you, then they'll beat you
Then they'll tell you it's fair
So beat it, but you wanna be bad
Just beat it (beat it), beat it (beat it)
No one wants to be defeated
Showin' how funky and strong is your fight
It doesn't matter who's wrong or right
Just beat it (beat it), beat it (beat it)
No one wants to be defeated
Showin' how funky and strong is your fight
It doesn't matter who's wrong or right
Just beat it (beat it, beat it, beat it)
Beat it (beat it, beat it)
Beat it (beat it, beat it)
Beat it (beat it, beat it)
Beat it (beat it, beat it)
Beat it (beat it), beat it (beat it)
No one wants to be defeated
Showin' how funky and strong is your fight
It doesn't matter who's wrong or right (who's right)
Just beat it (beat it), beat it (beat it)
No one wants to be defeated (no one)
Showin' how funky and strong is your fight
It doesn't matter who's wrong or right
Just beat it (beat it), beat it (beat it)
No one wants to be defeated (oh, no)
Showin' how funky and strong is your fight
It doesn't matter who's wrong or right
Just beat it (beat it), beat it (beat it)
No one wants to be defeated
Showin' how funky and strong is your fight
It doesn't matter who's wrong or right
Just beat it (beat it), beat it (beat it)`
    },
    {
      title: "Billie Jean (Official Video)",
      artist: "Michael Jackson",
      src: "sarkilar/Michael Jackson - Billie Jean (Official Video).mp3",
      cover: "kapaklar/indir (10).jpg",
      lyrics:`She was more like a beauty queen from a movie scene
I said, "Don't mind, but what do you mean, I am the one
Who will dance on the floor in the round?"
She said I am the one
Who will dance on the floor in the round
She told me her name was Billie Jean as she caused a scene
Then every head turned with eyes that dreamed of bein' the one
Who will dance on the floor in the round
People always told me, "Be careful of what you do
Don't go around breakin' young girls' hearts" (hee-hee)
And mother always told me, "Be careful of who you love
And be careful of what you do (oh-oh)
'Cause the lie becomes the truth" (oh-oh), hey-ey
Billie Jean is not my lover
She's just a girl who claims that I am the one (oh, baby)
But the kid is not my son (hoo)
She says I am the one (oh, baby)
But the kid is not my son (hee-hee-hee, no-no, hee-hee-hee, hoo)
For forty days and for forty nights, law was on her side
But who can stand when she's in demand? Her schemes and plans
'Cause we danced on the floor in the round (hee)
So take my strong advice
Just remember to always think twice
(Do think twice) do think twice (ah-hoo)
She told my baby we'd danced 'til three, then she looked at me
Then showed a photo of a baby cryin', his eyes were like mine (oh, no)
Go and dance on the floor in the round, baby (ooh, hee-hee-hee)
People always told me, "Be careful of what you do
And don't go around breakin' young girls' hearts" (don't break no hearts, hee-hee)
But she came and stood right by me
Just the smell of sweet perfume
This happened much too soon
She called me to her room, hey-ey
Billie Jean is not my lover (hoo)
She's just a girl who claims that I am the one
But the kid is not my son
No-no-no, no-no, no-no-no (hoo)
Billie Jean is not my lover
She's just a girl who claims that I am the one (oh, baby)
But the kid is not my son (no, no)
She says I am the one (oh, baby)
But the kid is not my son (no, hee-hee-ho, hee-hee-hee)
Hee, hoo
She says I am the one
But the kid is not my son (no-no-no, hoo, oh)
Billie Jean is not my lover
She's just a girl who claims that I am the one (you know what you did to me, baby)
But the kid is not my son
No-no-no (no-no-no, ah), no-no-no-no (no-no-no)
She says I am the one (no)
But the kid is not my son (no-no-no-no)
She says I am the one (you know what you did)
She says he is my son (breakin' my heart, babe)
She says I am the one
Billie Jean is not my lover
Billie Jean is not my lover
Billie Jean is not my lover
Billie Jean is not my lover (don't call me Billie Jean, hoo)
Billie Jean is not my lover
Billie Jean is not- (hee)`
    },
    {
      title: "Smooth Criminal (Official Video)",
      artist: "Michael Jackson",
      src: "sarkilar/Michael Jackson - Smooth Criminal (Official Video).mp3",
      cover: "kapaklar/indir (12).jpg",
      lyrics:`Aaow!
Tcha!
Shoo-cha-choo-cha!
Tcha!

As he came into the window
Was a sound of a crescendo
He came into her apartment
He left the bloodstains on the carpet

She ran underneath the table
He could see she was unable
So she ran into the bedroom
She was struck down, it was her doom

Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?

Annie, are you okay?
Will you tell us that you're okay?
There's a sign at the window
Then he struck you, a crescendo, Annie

He came into your apartment
He left the bloodstains on the carpet
Then you ran into the bedroom
You were struck down, it was your doom

Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?

You've been hit by
You've been hit by
A smooth criminal

Aaow!

So they came into the outway
It was Sunday, what a black day
Every time I tried to find him
There were no clues, they’re behind him
And they end up never knowing
Who’s the suspect or what to expect
Mouth-to-mouth resuscitation
Sounding heartbeats, intimidations

Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Annie, are you okay?

Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?
Annie, are you okay?
So, Annie, are you okay? Are you okay, Annie?

You've been hit by
You've been struck by
A smooth criminal

Aaow!

Annie, are you okay?
Will you tell us that you're okay?
There's a sound at the window
Then he struck you, a crescendo, Annie

He came into your apartment
Left the bloodstains on the carpet
And then you ran into the bedroom
You were struck down
It was your doom, Annie

Aaow!
Hoo!
Aaow!
Hoo!
Hoo!
Aaow!

Annie, are you okay?
Are you okay, Annie?

Annie, are you okay? (I don't know)
Will you tell us that you're okay? (I don't know)
There's a sound at the window (I don't know)
Then he struck you, a crescendo, Annie (I don't know)

He came into your apartment (I don't know)
Left bloodstains on the carpet (I don't know why, baby)
And then you ran into the bedroom (help me)
You were struck down
It was your doom, Annie (dag gone it)

Annie are you okay? (Dag gone it, baby)
Will you tell us that you're okay? (Dag gone it, baby)
There's a sound at the window (dag gone it, baby)
Then he struck you, a crescendo, Annie (hoo! Hoo!)

He came into your apartment (dag gone it)
Left bloodstains on the carpet (hoo!)
And then you ran into the bedroom (hoo! Hoo!)
You were struck down (dag gone it)
It was your doom, Annie (aaow!)

Annie, are you okay? (I don't know)
Will you tell us that you're okay? (I don't know)
There's a sound at the window (I don't know)
Then he struck you, a crescendo, Annie (I don't know)

He came into your apartment (I don't know)
Left bloodstains on the carpet (I don't know why, baby)
And then you ran into the bedroom (help me)
You were struck down
It was your doom, Annie (dag gone it)

Annie are you okay? (Dag gone it, baby)
Will you tell us that you're okay? (Dag gone it, baby)
There's a sound at the window (dag gone it, baby)
Then he struck you, a crescendo, Annie (hoo! Hoo!)

He came into your apartment (dag gone it)
Left bloodstains on the carpet (hoo!)
And then you ran into the bedroom (hoo! Hoo!)
You were struck down (dag gone it)
It was your doom, Annie (aaow!)

Annie, are you okay? (I don't know)
Will you tell us that you're okay? (I don't know)
There's a sound at the window (I don't know)
Then he struck you, a crescendo, Annie (I don't know)

He came into your apartment (I don't know)
Left bloodstains on the carpet (I don't know why, baby)
And then you ran into the bedroom (help me)
You were struck down
It was your doom, Annie (dag gone it)

Annie are you okay? (Dag gone it, baby)
Will you tell us that you're okay? (Dag gone it, baby)
There's a sound at the window (dag gone it, baby)
Then he struck you, a crescendo, Annie (hoo! Hoo!)

He came into your apartment (dag gone it)
Left bloodstains on the carpet (hoo!)
And then you ran into the bedroom (hoo! Hoo!)
You were struck down (dag gone it)
It was your doom, Annie (aaow!)`
    },
    {
      title: "il vento d’oro",
      artist: "JoJo's Bizarre Adventure: Golden Wind",
      src: "sarkilar/il vento doro.mp3",
      cover: "kapaklar/indir (13).jpg",
      lyrics:`Feel the hip hop, if you can rock
Need you, kick that
Turn up the bass
Go crazy, one by one
Brrt, stick up, hahaha
Ye, ye, yeah, kick it, kick it loud
And you forgot to turn up the bass!
Go crazy, it's a dangerous world
Brrt, stick up, Giogio
Buc-ci-ci-ci-cirati!
Yeah, kick it, kick it loud
Need you, kick that
Turn up the bass
Go crazy, one by one
Brrt, stick up, hahaha
Ye, ye, yeah, kick it, kick it loud
And you forgot to turn up the bass!
Go crazy, it's a dangerous world
Brrt, stick up, Giogio
Giogio
Golden Wind
Giogio
Golden Wind
Feel the hip hop, if you can rock
Need you, kick that
Turn up the bass
Go crazy, one by one
Brrt, stick up, hahaha
Ye, ye, yeah, kick it, kick it loud
And you forgot to turn up the bass!
Go crazy, it's a dangerous world
Brrt, stick up, Giogio
Get punching, get kicking, get fighting, get the win
Golden Wind!
Get punching, get kicking, get fighting, get the win
Golden Wind!
Get punching, get kicking, get fighting, get the win
Golden Wind!
Get punching, get kicking, get fighting, get the win
Golden Wind!
Buc-ci-ci-ci-cirati!
Feel the hip hop, if you can rock
Need you, kick that
Turn up the bass
Go crazy, one by one
Brrt, stick up, hahaha
Ye, ye, yeah, kick it, kick it loud
And you forgot to turn up the bass!
Go crazy, it's a dangerous world
Brrt, stick up, Giogio
Giogio
Giogio
Golden Wind
Giogio
Golden Wind
Buc-ci-ci-ci-cirati!
Feel the hip hop, if you can rock
Need you, kick that
Turn up the bass
Go crazy, one by one
Brrt, stick up, hahaha
Ye, ye, yeah, kick it, kick it loud
And you forgot to turn up the bass!
Go crazy, it's a dangerous world
Brrt, stick up
Giogio`
    },
    {
      title: "Queen - Another One Bites the Dust (Official Video)",
      artist: "Queen",
      src: "sarkilar/Queen - Another One Bites The Dust [Lyrics].mp3",
      cover: "kapaklar/Bites_the_Dust_Infobox_Manga.png",
      lyrics:`Let's go!
Steve walks warily down the street
With the brim pulled way down low
Ain't no sound but the sound of his feet
Machine guns ready to go
Are you ready? Hey
Are you ready for this?
Are you hanging on the edge of your seat?
Out of the doorway the bullets rip
To the sound of the beat, yeah
Another one bites the dust
Another one bites the dust
And another one gone, and another one gone
Another one bites the dust (yeah)
Hey, I'm gonna get you too
Another one bites the dust
How do you think I'm going to get along
Without you, when you're gone?
You took me for everything that I had
And kicked me out on my own
Are you happy, are you satisfied?
How long can you stand the heat?
Out of the doorway the bullets rip
To the sound of the beat, look out
Another one bites the dust
Another one bites the dust
And another one gone, and another one gone
Another one bites the dust
Hey, I'm gonna get you too
Another one bites the dust
Hey!
Oh, take it
Bite the dust
Bite the dust, hey
Hey
Another one bites the dust
Another one bites the dust, ow!
Another one bites the dust, hey, hey
Another one bites the dust, hey
Ooh, shout!
There are plenty of ways that you can hurt a man
And bring him to the ground
You can beat him, you can cheat him, you can treat him bad
And leave him when he's down, yeah
But I'm ready, yes I'm ready for you
I'm standing on my own two feet
Out of the doorway the bullets rip
Repeating to the sound of the beat, oh yeah
Another one bites the dust
Another one bites the dust
And another one gone, and another one gone
Another one bites the dust, yeah
Hey, I'm gonna get you too
Another one bites the dust
Shoot out
Ay-yeah
Alright`
    },
    {
      title: "Feyzulah",
      artist: "Feyzulah",
      src: "sarkilar/Feyzulah.mp3",
      cover: "kapaklar/indir (14).jpg"
    },
    {
      title: "JoJo ★ STEEL BALL RUN OP ★『Holy Steel』- Original - JoJos Bizarre Adventure Part 7 【ジョジョの奇妙な冒険】",
      artist: "JoJo's Bizarre Adventure OST",
      src: "sarkilar/JoJo ★ STEEL BALL RUN OP ★『Holy Steel』- Original - JoJos Bizarre Adventure Part 7 【ジョジョの奇妙な冒険】.mp3",
      cover: "kapaklar/images.jpg",
      lyrics:`Steel Ball Run
Steel ball run

Steel Ball Run
Steel ball run

Run for your life
Run for your life


(Go, go, JoJo)
(Go, go, JoJo)


炎を睨む瞳
honō wo niramu hitomi

高みを目指したいんだ
takami wo mezashitain da

この道に (この道に)
kono michi ni (kono michi ni)

集い散った (集い散った)
tsudoi chitta (tsudoi chitta)

夢の残骸を越えて
yume no zongai wo koete


砂漠のような心
sabaku no you na kokoro

また燃える明日を待つ
mata moeru ashita wo matsu


火花を散らして fire
hibana wo chirashite fire

十字架を焼き尽くせ
juujika wo yaki tsukuse

敗者たちの痛みを背負って
haisha-tachi no itami wo seotte

最後まで走り抜け
saigo made hashirinuke


Roll the dice
Roll the dice

For your life
For your life

Take your chance (take your chance)
Take your chance (take your chance)

Now or die
Now or die

Hold tight your holy steel
Hold tight your holy steel`
    },
    {
      title: "Army Of Lovers - Crucified",
      artist: "Army Of Lovers",
      src: "sarkilar/Army Of Lovers - Crucified.mp3",
      cover: "kapaklar/main-qimg-23e73ec9ad270cf1a6ed0a0d78d81f66-lq.jpg",
      lyrics:`I'm crucified, crucified like my savior
Saintlike behavior, a lifetime I prayed
I'm crucified for the holy dimension
Godlike ascension, heavens away
I've seen the deepest darkness and wrestled with gods
Ride the noble harness, raining cats and dogs
I stand before my maker like Moses on the hill
My Guinness record baker, I abide your will
The first of reciter, I saw eternal light
Best of vocal fighters, beyond human sight
Where thorns are a teaser, I've played a double jeux
Yherushalaim at Easter
I cry, I pray, mon dieu
I cry, I pray, mon dieu
I'm crucified, crucified like my savior
Saintlike behavior, a lifetime I prayed
I'm crucified for the holy dimension
Godlike ascension, heavens away
Prophets I've been reading, stories I've been told
Before I end my breathing, I travel in the soul
Where thorns are a teaser, I've played the double jeux
Yherushalaim at Easter
I cry, I pray, mon dieu
I cry, I pray, mon dieu
I cry, I pray, mon dieu
Adieu, mon dieu
I'm crucified, crucified like my savior
Saintlike behavior, a lifetime I prayed
I'm crucified for the holy dimension
Godlike ascension, heavens away
I'm crucified for the holy dimension
Godlike ascension, heavens away
I'm crucified, crucified like my savior
Saintlike behavior, a lifetime I prayed
I'm crucified for the holy dimension
Godlike ascension, heavens away`
    },
    {
      title: "Lady Gaga - Judas (Lyrics)",
      artist: "Lady Gaga",
      src: "sarkilar/Lady Gaga - Judas (Lyrics).mp3",
      cover: "kapaklar/indir (16).jpg",
      lyrics:`Oh, whoa-whoa, oh-oh
I'm in love with Judas, Judas
Oh-oh-oh-oh-oh
I'm in love with Judas, Judas
Judas, Juda-ah-ah, Judas, Juda-ah-ah
Judas, Juda-ah-ah, Judas, Gaga
Judas, Juda-ah-ah, Judas, Juda-ah-ah
Judas, Juda-ah-ah, Judas, Gaga
When he calls to me, I am ready
I'll wash his feet with my hair if he needs
Forgive him when his tongue lies through his brain
Even after three times, he betrays me
Ah-ah, ah-ah-ah-ah, ah-ah, ah-ah-ah-ah
I'll bring him down, bring him down, down
Ah-ah, ah-ah-ah-ah, ah-ah, ah-ah-ah-ah
A king with no crown, king with no crown
I'm just a Holy Fool, oh, baby, it's so cruel
But I'm still in love with Judas, baby
I'm just a Holy Fool, oh, baby, it's so cruel
But I'm still in love with Judas, baby
Oh, whoa-whoa, oh-oh
I'm in love with Judas, Judas
Oh-oh-oh-oh-oh
I'm in love with Judas, Judas
Judas, Juda-ah-ah, Judas, Juda-ah-ah
Judas, Juda-ah-ah, Judas, Gaga
I couldn't love a man so purely
Even prophets forgave his goofy way
I've learned love is like a brick, you can
Build a house or sink a dead body
Ah-ah, ah-ah-ah-ah, ah-ah, ah-ah-ah-ah
I'll bring him down, bring him down, down
Ah-ah, ah-ah-ah-ah, ah-ah, ah-ah-ah-ah
A king with no crown, king with no crown
I'm just a Holy Fool, oh, baby, it's so cruel
But I'm still in love with Judas, baby
I'm just a Holy Fool, oh, baby, it's so cruel
But I'm still in love with Judas, baby
Oh, whoa-whoa, oh-oh
I'm in love with Juda-as, Juda-as
Oh-oh-oh-oh-oh
I'm in love with Juda-as, Juda-as
Ew
In the most Biblical sense, I am beyond repentance
Fame hooker, prostitute, wench vomits her mind
But in the cultural sense, I just speak in future tense
Judas, kiss me if offensed, or wear ear condom next time
I wanna love you
But something's pulling me away from you
Jesus is my virtue
And Judas is the demon I cling to
I cling to
Just a Holy Fool, oh, baby, it's so cruel
But I'm still in love with Judas, baby
I'm just a Holy Fool, oh, baby, it's so cruel
But I'm still in love with Judas, baby
Oh, whoa-whoa, oh-oh
I'm in love with Judas, Judas
Oh-oh-oh-oh-oh
I'm in love with Judas, Judas
Judas, Juda-ah-ah, Judas, Juda-ah-ah
Judas, Juda-ah-ah, Judas, Gaga`
    },
    {
      title: "Miku (Lyrics Video)",
      artist: "Miku",
      src: "sarkilar/Miku by Anamanaguchi (Lyrics Video).mp3",
      cover: "kapaklar/indir (15).jpg",
      lyrics:`Miku, Miku, you can call me Miku
Blue hair, blue tie, hiding in your wi-fi
Open secrets, anyone can find me
Hear your music running through my mind

I'm thinking Miku, Miku (oo-ee-oo)
I'm thinking Miku, Miku (oo-ee-oo)
I'm thinking Miku, Miku (oo-ee-oo)
I'm thinking Miku, Miku (oo-ee-oo)

I'm on top of the world because of you
All I wanted to do is follow you
I'll keep singing along to all of you
I'll keep singing along

I'm thinking Miku, Miku (oo-ee-oo)
I'm thinking Miku, Miku (oo-ee-oo)
I'm thinking Miku, Miku (oo-ee-oo)
I'm thinking Miku, Miku (oo-ee-oo)

Miku, Miku, what's it like to be you?
20, 20, looking in the rear view
Play me, break me, make me feel like Superman
You can do anything you want

I'm on top of the world because of you
All I wanted to do is follow you
I'll keep singing along to all of you
I'll keep singing along

I'm on top of the world because of you
I do nothing that they could never do
I'll keep playing along with all of you
I'll keep playing along

I'm thinking Miku, Miku (oo-ee-oo)
I'm thinking Miku, Miku (oo-ee-oo)
I'm thinking Miku, Miku (oo-ee-oo)
I'm thinking Miku, Miku (oo-ee-oo)

Where we were walking together?
I will see you in the end
I'll take you where you've never been
Then bring you back again

Listen to me with your eyes
I'm watching you from in the sky
If you forget I'll fade away
I'm asking you to let me stay

So bathe me in your magic light
And keep it on in darkest night
I need you here to keep me strong
To live my life and sing along

I'm lying with you wide awake
Like your expensive poison snake
You found me here inside a dream
Walk through the fire straight to me`
    },
    {
      title: "Ben Fero - 3 2 1 [Official Video]",
      artist: "Ben Fero",
      src: "sarkilar/Ben Fero - 3 2 1 [Official Video].mp3",
      cover: "kapaklar/indir (17).jpg",
      lyrics:`3 2 1 bitir işi
Bu Rap'im iyi ve bitirici
Popüleriz gibi gibi
Göremedin ki Biggie Biggie
Yalan olur birikimin
Göremez işini bir-iki bin
Dedim: "Hip-Hop iyi fikir"
İyi gelir ve bir-iki mil
3 2 1 bitir işi
Bu Rap'im iyi ve bitirici
Popüleriz gibi gibi
Göremedin ki Biggie Biggie
Yalan olur birikimin
Göremez işini bir-iki bin
Dedim: "Hip-Hop iyi fikir"
İyi gelir ve bir-iki mil
Benimki bitti sen oku (sen)
Çekinme baby gel otur (gel)
İyice kavra bele vur (bel)
Benim işim bu ver onu (ver)
Koşarız ileri geledur (geledur)
Yakala treni peronu (peronu)
Adamım adamı tanıdı
Adamım hıdıdı hıdıdı Fero bu (yes)
Bro merhaba sana bu müzik kaba saba
Sana der: "Kapasana!" De ki: "Sus madafaka" (sus, sus)
Evimiz sapa sapa Rap'imiz akar akar
Fifa PES Afrika
Shakira Waka Waka (Waka)
Baka baka kararır üzüm üzüme (bak)
Ben Fero büyüyor günü gününe (gün)
Kimseye his yok körü körüne (yok)
Hakedene respect gidek ölüme (git)
Gidek ölüme hadi gidek ölüme (woah)
Her zaman engel çıkar önüne (boy)
Bak işine sen boy güven özüne (öz)
Kulak asmadan onun bunun sözüne (söz)
3 2 1 bitir işi
Bu Rap'im iyi ve bitirici
Popüleriz gibi gibi
Göremedin ki Biggie Biggie
Yalan olur birikimin
Göremez işini bir-iki bin
Dedim: "Hip-Hop iyi fikir"
İyi gelir ve bir-iki mil
3 2 1bitir işi
Bu Rap'im iyi ve bitirici
Popüleriz gibi gibi
Göremedin ki Biggie Biggie
Yalan olur birikimin
Göremez işini bir-iki bin
Dedim: "Hip-Hop iyi fikir"
İyi gelir ve bir-iki mil
Dangerous suları Los Angeles kuralı
En cılız olan ölür ben değil oralı
Çok şükür Rap müzik kim ise bulanı
Bugün Etiler yarın Ankara Tunalı (skrt)
Gelmedi bunalım Ben Fero'dur adım (yes, yes)
Dedirtmeden bırakırım "Kel Fero bunadı" (kel, kel)
Dolar gibi yükselen zenciye bi' bakın
Önce karakter nigga siktir et Hip-Hop'ı (aha)
Bi' takımım yok homie kardeşimiz çok (çok)
Protein dışında da açlığımız yok (yok)
Onla bunla yarış yapıp olamazsın bok (bok)
Sana maraton nigga benim için jog (jog)
3 2 1bitir işi
Bu Rap'im iyi ve bitirici
Popüleriz gibi gibi
Göremedin ki Biggie Biggie
Yalan olur birikimin
Göremez işini bir-iki bin
Dedim: "Hip-Hop iyi fikir"
İyi gelir ve bir-iki mil
3 2 1 bitir işi
Bu Rap'im iyi ve bitirici
Popüleriz gibi gibi
Göremedin ki Biggie, Biggie
Yalan olur birikimin
Göremez işini bir-iki bin
Dedim; "Hip-Hop iyi fikir"
İyi gelir ve bir-iki mil`
    },
    {
      title: "TARKAN - Şımarık",
      artist: "TARKAN",
      src: "sarkilar/Tarkan - Şımarık (Audio).mp3",
      cover: "kapaklar/indir (20).jpg",
      lyrics:`Takmış Koluna elin adamını beni
Orta yerimden çatlatıyor
Ağzında sakızı şişirip şişirip
Arsız arsız patlatıyor

Belki de bu yüzden vuruldum
Sahibin olamadım ya
Sığar mi erkekliğe seni şımarik
Değişti mi bu dünya

Çekmiş kaşına gözüne sürme
Dudaklar kıpkırmızı kırıtiyor
Bi de karşıma geçmiş utanmasi yok
İnadıma inadıma sırıtiyor

Biz böyle mi gördük babamızdan
Ele güne rezil olduk
Yeni adet gelmiş eski köye vah
Dostlar mahvolduk

Seni gidi fındık kıran
Yılanı deliğinden çikaran
Kaderim püsküllü belam
Yakalarsam

Seni gidi fındık kıran
Yılanı deliğinden çikaran
Kaderim püsküllü belam
Yakalarsam

Ocağına düştüm yavru
Kucağına düştüm yavru
Sıcağına düştüm yavru
El aman

Ocağına düştüm yavru
Kucağına düştüm yavru
Sıcağına düştüm yavru
El aman

Takmış Koluna elin adamını beni
Orta yerimden çatlatıyor
Ağzında sakızı şişirip şişirip
Arsız arsız patlatıyor

Biz böyle mi gördük babamızdan
Ele güne rezil olduk
Yeni adet gelmiş eski köye vah
Dostlar mahvolduk

Seni gidi fındık kıran
Yılanı deliğinden çikaran
Kaderim püsküllü belam
Yakalarsam

Seni gidi fındık kıran
Yılanı deliğinden çikaran
Kaderim püsküllü belam
Yakalarsam

Ocağına düştüm yavru
Kucağına düştüm yavru
Sıcağına düştüm yavru
El aman

Ocağına düştüm yavru
Kucağına düştüm yavru
Sıcağına düştüm yavru
El aman

Seni gidi fındık kıran
Yılanı deliğinden cikaran
Kaderim püsküllü belam
Yakalarsam`
    },
    {
      title: "Müslüm Gürses - Seni Yazdım Kalbime",
      artist: "Müslüm Gürses",
      src: "sarkilar/Müslüm Gürses - Seni Yazdım.mp3",
      cover: "kapaklar/maxresdefault.jpg",
      lyrics:`Solmadan gel artık aşkımın gülü
Olsa da konuşsa kalbimin dili
Küçücük dünyamda bir bilsem seni
Görünmez yazıyla yazdım kalbime
Solmadan gel artık aşkımın gülü
Olsa da konuşsa kalbimin dili
Küçücük dünyamda bir bilsem seni
Görünmez yazıyla yazdım kalbime
Böyle bir aşk görülmemiş dünyada
Ne geçmişte ne de bundan sonra da
Arasalar bulamazlar rüyada
Göremezler seni yazdım kalbime
Nasıl sevgiliymiş görün de bakın
Sevgilim seninle buluşmam yakın
Unuttum desem de inanma sakın
Anılarla yazdım seni kalbime
Nasıl sevgiliymiş görün de bakın
Sevgilim seninle buluşmam yakın
Unuttum desem de inanma sakın
Anılarla yazdım seni kalbime
Böyle bir aşk görülmemiş dünyada
Ne geçmişte ne de bundan sonra da
Arasalar bulamazlar rüyada
Göremezler seni yazdım kalbime`
    },
    {
      title: "Ferdi Tayfur - İçim Yanar",
      artist: "Ferdi Tayfur",
      src: "sarkilar/Ferdi Tayfur - İçim Yanar.mp3",
      cover: "kapaklar/indir (18).jpg",
      lyrics:`Hani en sevdiğini kaybettiğinde
İçin yanar yanar yanar yanar ya
Ben de seni kaybettim ağlarım şimdi
İçim yanar yanar yanar yanar yanar ah
İçim yanar yanar yanar yanar yanar
Canım yanar yanar yanar yanar yanar
İçim yanar yanar yanar yanar yanar ah
İçim yanar yanar yanar yanar yanar
Canım yanar yanar yanar yanar yanar
Ben senin hasretine alışamadım
İçimdeki kavgamla barışamadım
Uçup gitti mutluluk kavuşamadım
İçim yanar yanar yanar yanar yanar ah
İçim yanar yanar yanar yanar yanar
Canım yanar yanar yanar yanar yanar
İçim yanar yanar yanar yanar yanar ah
İçim yanar yanar yanar yanar yanar
Canım yanar yanar yanar yanar yanar
İçim yanar yanar yanar yanar yanar ah
İçim yanar yanar yanar yanar yanar
Canım yanar yanar yanar yanar yanar
İçim yanar yanar yanar yanar yanar ah
İçim yanar yanar yanar yanar yanar
Canım yanar yanar yanar yanar yanar
İçim yanar yanar yanar yanar yanar ah
İçim yanar yanar yanar yanar yanar
Canım yanar yanar yanar yanar yanar`
    },
    {
      title: "Ferdi Özbeğen - Gündüzüm Seninle",
      artist: "Ferdi Özbeğen",
      src: "sarkilar/Ferdi Özbeğen - Gündüzüm Seninle.mp3",
      cover: "kapaklar/indir (21).jpg",
      lyrics:`Gündüzüm seninle
Gecem seninle
Beyhude geçti bu
Ömrüm derdinle
Aşkını bir sır gibi
Senelerdir sakladım
Geceleri rüyada
İsmini sayıkladım
Aşkını bir sır gibi
Senelerdir sakladım
Geceleri rüyada
İsmini sayıkladım
Sevgilim saçların
Zannetme,  solmaz
Dünyada sevenler
Bahtiyar olmaz
Aşkını bir sır gibi
Senelerdir sakladım
Geceleri rüyada
İsmini sayıkladım
Aşkını bir sır gibi
Senelerdir sakladım
Geceleri rüyada
İsmini sayıkladım`
    },
    {
      title: "Katy Perry - California Gurls (Official Music Video) ft. Snoop Dogg",
      artist: "Katy Perry -ft. Snoop Dogg",
      src: "sarkilar/Katy Perry - California Gurls (Official Music Video) ft. Snoop Dogg.mp3",
      cover: "kapaklar/indir (19).jpg",
      lyrics:`Greetings loved ones
Let's take a journey.
I know a place
Where the grass is really greener
Warm, wet and wild
There must be something in the water
Sippin' gin and juice
Laying underneath the palm trees (and then)
Boys break their necks
Try'na to creep a little sneak peek (at us)
You could travel the world,
But nothing comes close to the golden coast
Once you party with us, you'll be falling in love
Oh oooh
California girls, we're unforgettable
Daisy Dukes, bikinis on top
Sun-kissed skin, so hot, we'll melt your popsicle
Oooh oh oooh
California girls, we're undeniable
Fine, fresh, fierce, we got it on lock
West Coast represent, now put your hands up
Oooh oh oooh
Sex on the beach
We don't mind sand in our stilettos
We freak in my Jeep
Snoop Doggy Dogg on the stereo
Oh oh
You could travel the world,
But nothing comes close to the golden coast
Once you party with us, you'll be falling in love
Oh oooh
California girls, we're unforgettable (California)
Daisy Dukes, bikinis on top
Sun-kissed skin, so hot, we'll melt your popsicle (uh)
Oooh oh oooh
California girls (California), we're undeniable
Fine, fresh, fierce, we got it on lock
West Coast represent (West Coast), now put your hands up
Oooh oh oooh
Tone, tan, fit and ready
Turn it up cause it's gettin' heavy
Wild wild West Coast
These are the girls I love the most
I mean the ones
I mean like she's the one
Kiss her, touch her, squeeze her buns (ah)
The girl's a freak
She drives a Jeep
In Laguna Beach
I'm okay, I won't play
I love the bait
Just like I love LA,
Venice Beach and Palm Springs
Summer time is everything
Homeboys banging out
All that ass hanging out
Bikinis, tankinis, martinis, no weenies
Just a king and a queenie
Katy my lady (yeah)
You looking here baby (uh huh)
I'm all up on you
Cause you representin' California (oh yeah)
California girls, we're unforgettable
Daisy Dukes, bikinis on top
Sun-kissed skin, so hot, we'll melt your popsicle
Oooh oh oooh (c'mon, c'mon)
California girls, we're undeniable
Fine, fresh, fierce, we got it on lock
West Coast represent (West Coast, West Coast),
now put your hands up
Oooh oh oooh (Ey, ey)
California girls, man
(California, California girls)
I really wish you all could be California girls`
    }
  ];
    // Diğer şarkıları da aynı şekilde ekle

// Varsayım: lyricsVisible adında bir bool değişken mevcut ve toggle ediliyor
// Varsayım: lyricsVisible adında bir bool değişken mevcut ve toggle ediliyor
const lyricsDiv = document.getElementById("lyricsDiv");
const lyricsButton2 = document.getElementById("lyricsButton");
const originalLyricsHeight = lyricsDiv.clientHeight; // Başlangıç yüksekliği
let lyricsVisible = false;

lyricsButton2.addEventListener("click", () => {
    lyricsVisible = !lyricsVisible;

    if (lyricsVisible) {
        lyricsDiv.style.display = "block";
        lyricsDiv.style.height = "auto";

        // Şu anki şarkı
        const currentSong = songs[current];

        if (currentSong.lyrics) {
            lyricsDiv.textContent = currentSong.lyrics;
        } else {
            lyricsDiv.textContent = "Şarkı sözü bulunamadı.";
        }

        lyricsButton2.textContent = "Close Lyrics";
    } else {
        lyricsDiv.style.display = "none";
        lyricsDiv.style.height = originalLyricsHeight + "px";
        lyricsDiv.textContent = "";
        lyricsButton2.textContent = "Open Lyrics";
    }
});

 
  
  function loadSong(index) {
    const song = songs[index];
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audio.src = song.src;
    playBtn.textContent = "▶️";
  }
  
  function playSong() {
    audio.play();
    playBtn.textContent = "⏸";
  }
  
  function pauseSong() {
    audio.pause();
    playBtn.textContent = "▶️";
  }
  
  playBtn.addEventListener("click", () => {
    if (audio.paused) playSong();
    else pauseSong();
  });
  
  nextBtn.addEventListener("click", () => {
    current = (current + 1) % songs.length;
    loadSong(current);
    playSong();
  });
  
  prevBtn.addEventListener("click", () => {
    current = (current - 1 + songs.length) % songs.length;
    loadSong(current);
    playSong();
  });
  
  forward5.addEventListener("click", () => (audio.currentTime += 5));
  back5.addEventListener("click", () => (audio.currentTime -= 5));
  
  audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
    currentTime.textContent = formatTime(audio.currentTime);
  });
  
  audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration;
    duration.textContent = formatTime(audio.duration);
  });
  
  progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
  });
  
  function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
  
  // Playlist Oluştur
  songs.forEach((song, index) => {
    const item = document.createElement("div");
    item.className = "playlist-item";
    item.textContent = `${song.artist} - ${song.title}`;
    item.addEventListener("click", () => {
      current = index;
      loadSong(current);
      playSong();
    });
    playlist.appendChild(item);
  });
  
  // İlk şarkı yüklensin
  loadSong(current);
  
  // Ses Kontrolü
const volumeSlider = document.getElementById("volume");
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

// Hız Kontrolü
const speedSelect = document.getElementById("speed");
speedSelect.addEventListener("change", () => {
  audio.playbackRate = parseFloat(speedSelect.value);
});
const searchInput = document.getElementById("search");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";
  
  if (searchTerm.trim() === "") {
    searchResults.style.display = "none";
    return;
  }

  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchTerm) ||
    song.artist.toLowerCase().includes(searchTerm)
  );

  filteredSongs.forEach((song, index) => {
    const item = document.createElement("div");
    item.className = "search-item";
    item.textContent = `${song.artist} - ${song.title}`;
    item.addEventListener("click", () => {
      current = songs.indexOf(song);
      loadSong(current);
      playSong();
      searchResults.style.display = "none";
    });
    searchResults.appendChild(item);
  });

  searchResults.style.display = filteredSongs.length ? "block" : "none";
});

// Şarkı sözlerini tutacak bir obje (örnek şarkı sözleri ekleyebilirsiniz)
