let musics=[
    {
        id:1,
        song:"Hymn for the weekend",
        artist:"ColdPlay",
        audioSrc:"audio files/Hymn For The Weekend(Mr-Jatt1.com).mp3",
        imageSrc:"images/hymn.jpg"
    },
    {
        id:2,
        song:"Perfect",
        artist:"Ed Sheeran",
        audioSrc:"audio files/Ed_Sheeran_-_Perfect_(thinknews.com.ng).mp3",
        imageSrc:"images/perfect.jpg"   
    },
    {
        id:3,
        song:"Say u Wont Let Go",
        artist:"James Arthur",
        audioSrc:"audio files/James_Arthur_Say_You_Wont_Let_Go_(thinkNews.com.ng).mp3",
        imageSrc:"images/wontLetGo.jpg"    
    },
    {
        id:4,
        song:"Good Life",
        artist:"Kehlani",
        audioSrc:"audio files/G-Eazy-Feat.-Kehlani-Good-Life-_-OpraDre.com_.mp3",
        imageSrc:"images/goodLife.jpg" 
    },
    
    {
        id:5,
        song:"Kesariya",
        artist:"Arijit Singh",
        audioSrc:"audio files/Kesariya(PagalWorld.com.se).mp3",
        imageSrc:"images/kesariya.jpg" 
    
    },
    {
        id:6,
        song:"Khair Mangdi",
        artist:"Bilal Saeed",
        audioSrc:"audio files/Khair Mangdi Mp3 Song By Bilal Saeed Ft Dr Zeus and Fateh.mp3",
        imageSrc:"images/khairMangdi.jpg" 
    },
    {
        id:7,
        song:"Lat Lag Gayi",
        artist:"Benny Dayal & Shalmali Kholgade",
        audioSrc:"audio files/Lat Lag Gayee - Race 2 128 Kbps.mp3",
        imageSrc:"images/LLG.jpg" 
    
    },
    {
        id:8,
        song:"Positions",
        artist:"Ariana Grande",
        audioSrc:"audio files/Positions---Ariana-Grande(pagolworld.nl).mp3",
        imageSrc:"images/positons.jpg" 
    
    },
    {
        id:9,
        song:"Aziyat",
        artist:"Pratyush Dhiman",
        audioSrc:"audio files/Aziyat(PagalWorld.com.se).mp3",
        imageSrc:"images/aziyat.jpg" 
    },
    {
        id:10,
        song:"PayPhone",
        artist:"Maroon 5",
        audioSrc:"audio files/PayphonebyMaroon5.mp3",
        imageSrc:"images/download.jpg" 
    

    }
]

for(let i=0;i<musics.length;i++)
{
    let tile=document.createElement("div");
tile.classList.add("tile");


let thumbnail=document.createElement("div");
thumbnail.classList.add("thumbnail");

let img=document.createElement("img");
img.src=musics[i].imageSrc;

thumbnail.append(img);
tile.append(thumbnail);

let desc=document.createElement("div");
desc.classList.add("desc");

let h2=document.createElement("h2");
h2.append(musics[i].song);
desc.append(h2);

let h3=document.createElement("h3");
h3.append(musics[i].artist);

desc.append(h3);
 
tile.append(desc);
tile.addEventListener("click", function(){
    playMusic(musics[i])
});
document.querySelector(".music-list").append(tile);

}

function playMusic(musics)
{
    console.log(musics);
    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".img-thumb").src=musics.imageSrc;
    document.querySelector(".song").innerHTML=musics.song;
    document.querySelector(".artist").innerHTML=musics.artist;
    document.querySelector(".audio").src=musics.audioSrc;
    document.querySelector(".audio").play();
}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    document.querySelector(".audio").pause();
}