(function($){
	// Settings
	var repeat = localStorage.repeat || 0,
		shuffle = localStorage.shuffle || 'false',
		continous = true,
		autoplay = true,
		playlist = [
			{
				title: '斑马随弹',
				artist: 'saillin',
				album: '专辑',
				cover:'img/1.jpg',
				mp3: 'https://www.joy127.com/uploads/mp3/202008/13/1597250650380.mp3',
				ogg: ''
			},
			{
				title: '挪威的森林',
				artist: '伍佰',
				album: '滚石香港黄金十年 伍佰精选',
				cover: 'img/2.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=157288.mp3',
				ogg: ''
			},
			{
				title: 'chenparty dj',
				artist: '德国童声',
				album: 'chenparty 超好听的德国童声 dj',
				cover: 'img/3.jpg',
				mp3: 'http://rm.sina.com.cn/wm/VZ2010050511043310440VK/music/MUSIC1005051622027270.mp3',
				ogg: ''
			},
                        {
				title: '光辉岁月',
				artist: 'beyond',
				album: '命运派对',
				cover: 'img/4.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=346576.mp3',
				ogg: ''
			},
                        {
				title: '不浪漫罪名',
				artist: '王杰',
				album: '万岁2001',
				cover:'img/5.jpg',
				mp3: 'https://www.joy127.com/url/465.mp3',
				ogg: ''
			},
                        {
				title: '安和桥',
				artist: '宋冬野',
				album: '安和桥北',
				cover:'img/6.jpg',
				mp3: 'https://www.joy127.com/url/8994.mp3',
				ogg: ''
			},
                        {
				title: '不找了',
				artist: '郭旭',
				album: '专辑',
				cover:'img/7.jpg',
				mp3: 'https://www.joy127.com/url/10290.mp3',
				ogg: ''
			},
                        {
				title: '钟无颜',
				artist: '谢安琪',
				album: '专辑',
				cover:'img/8.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=308353.mp3',
				ogg: ''
			},
                        {
				title: 'Beautiful Times',
				artist: 'Owl City',
				album: 'Beautiful Times',
				cover:'img/9.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=29543482.mp3',
				ogg: ''
			},
                        {
				title: '海阔天空',
				artist: 'beyond',
				album: '乐与怒',
				cover:'img/10.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=346089.mp3',
				ogg: ''
			},
                        {
				title: '你不是真正的快乐',
				artist: '五月天',
				album: '后青春的诗',
				cover:'img/11.jpg',
				mp3: 'https://www.joy127.com/url/10415.mp3',
				ogg: ''
			},
                        {
				title: '断点',
				artist: '张敬轩',
				album: '',
				cover:'img/12.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=189323.mp3',
				ogg: ''
			},
                        {
				title: '爱你',
				artist: '陈芳语',
				album: '',
				cover:'img/13.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=22852057.mp3',
				ogg: ''
                        },
                        {
				title: '去年夏天',
				artist: '王大毛',
				album: '',
				cover:'img/14.jpg',
				mp3: 'https://www.joy127.com/url/6726.mp3',
				ogg: ''
			},
                        {
				title: '去年夏天',
				artist: '家家',
				album: '',
				cover:'img/15.jpg',
				mp3: 'https://www.joy127.com/url/10938.mp3',
				ogg: ''
			},
                        {
				title: '有点甜',
				artist: '泥鳅Niko,小泥丸',
				album: '',
				cover:'img/16.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=430685474.mp3',
				ogg: ''
			},
                        {
				title: '无尽空虚',
				artist: 'Beyond',
				album: '',
				cover:'img/17.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=346591.mp3',
				ogg: ''
			},
                        {
				title: '喜欢你',
				artist: 'G.E.M.邓紫棋',
				album: '',
				cover:'img/18.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=28949444.mp3',
				ogg: ''
			},
                        {
				title: 'My Love',
				artist: 'Westlife',
				album: '',
				cover:'img/19.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=572412968.mp3',
				ogg: ''
			},
                        {
				title: '突然的自我 ',
				artist: '伍佰',
				album: '',
				cover:'img/2.jpg',
				mp3: 'https://www.joy127.com/url/10939.mp3',
				ogg: ''
			},
                        {
				title: '穿越时空的思念',
				artist: 'DiESi',
				album: '',
				cover:'img/20.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=1345395655.mp3',
				ogg: ''
			},
                        {
				title: '天空之城（经典钢琴版）',
				artist: '（翻自 久石譲） - dylanf',
				album: '',
				cover:'img/21.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=864711417.mp3',
				ogg: ''
			},
                        {
				title: '模特',
				artist: '李荣浩',
				album: '',
				cover:'img/22.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=27731176.mp3',
				ogg: ''
			},
                        {
				title: '你的酒馆对我打了烊',
				artist: '陈雪凝',
				album: '',
				cover:'img/23.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=1341964346.mp3',
				ogg: ''
			},
                        {
				title: '绿色',
				artist: '陈雪凝',
				album: '',
				cover:'img/24.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=1345848098.mp3',
				ogg: ''
			},
                        {
				title: '灰姑娘',
				artist: '陈雪凝',
				album: '',
				cover:'img/25.jpg',
				mp3: 'https://www.joy127.com/url/10941.mp3',
				ogg: ''
			},
                        {
				title: '成都',
				artist: '赵雷',
				album: '',
				cover:'img/26.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=436514312.mp3',
				ogg: ''
			},
                        {
				title: '理想',
				artist: '赵雷',
				album: '',
				cover:'img/27.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=29567189.mp3',
				ogg: ''
			},
                        {
				title: '小幸运',
				artist: '田馥甄',
				album: '',
				cover:'img/28.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=33206214.mp3',
				ogg: ''
			},
                        {
				title: '寂寞寂寞就好',
				artist: '田馥甄',
				album: '',
				cover:'img/29.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=296885.mp3',
				ogg: ''
			},
                        {
				title: '你就不要想起我',
				artist: '田馥甄',
				album: '',
				cover:'img/30.jpg',
				mp3: 'http://music.163.com/song/media/outer/url?id=28018075.mp3',
				ogg: ''
			},
			];

	// Load playlist
	for (var i=0; i<playlist.length; i++){
		var item = playlist[i];
		$('#playlist').append('<li>'+item.artist+' - '+item.title+'</li>');
	}

	var time = new Date(),
		currentTrack = shuffle === 'true' ? time.getTime() % playlist.length : 0,
		trigger = false,
		audio, timeout, isPlaying, playCounts;

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');
		clearInterval(updateProgress);
		isPlaying = false;
	}

	// Update progress
	var setProgress = function(value){
		var currentSec = parseInt(value%60) < 10 ? '0' + parseInt(value%60) : parseInt(value%60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value/60)+':'+currentSec);
		$('.progress .pace').css('width', ratio + '%');
		$('.progress .slider a').css('left', ratio + '%');
	}

	var updateProgress = function(){
		setProgress(audio.currentTime);
	}

	// Progress slider
	$('.progress .slider').slider({step: 0.1, slide: function(event, ui){
		$(this).addClass('enable');
		setProgress(audio.duration * ui.value / 100);
		clearInterval(timeout);
	}, stop: function(event, ui){
		audio.currentTime = audio.duration * ui.value / 100;
		$(this).removeClass('enable');
		timeout = setInterval(updateProgress, 500);
	}});

	// Volume slider
	var setVolume = function(value){
		audio.volume = localStorage.volume = value;
		$('.volume .pace').css('width', value * 100 + '%');
		$('.volume .slider a').css('left', value * 100 + '%');
	}

	var volume = localStorage.volume || 0.5;
	$('.volume .slider').slider({max: 1, min: 0, step: 0.01, value: volume, slide: function(event, ui){
		setVolume(ui.value);
		$(this).addClass('enable');
		$('.mute').removeClass('enable');
	}, stop: function(){
		$(this).removeClass('enable');
	}}).children('.pace').css('width', volume * 100 + '%');

	$('.mute').click(function(){
		if ($(this).hasClass('enable')){
			setVolume($(this).data('volume'));
			$(this).removeClass('enable');
		} else {
			$(this).data('volume', audio.volume).addClass('enable');
			setVolume(0);
		}
	});

	// Switch track
	var switchTrack = function(i){
		if (i < 0){
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length){
			track = currentTrack = 0;
		} else {
			track = i;
		}

		$('audio').remove();
		loadMusic(track);
		if (isPlaying == true) play();
	}

	// Shuffle
	var shufflePlay = function(){
		var time = new Date(),
			lastTrack = currentTrack;
		currentTrack = time.getTime() % playlist.length;
		if (lastTrack == currentTrack) ++currentTrack;
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function(){
		pause();
		audio.currentTime = 0;
		playCounts++;
		if (continous == true) isPlaying = true;
		if (repeat == 1){
			play();
		} else {
			if (shuffle === 'true'){
				shufflePlay();
			} else {
				if (repeat == 2){
					switchTrack(++currentTrack);
				} else {
					if (currentTrack < playlist.length) switchTrack(++currentTrack);
				}
			}
		}
	}

	var beforeLoad = function(){
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
		$('.progress .loaded').css('width', (100 / (this.duration || 1) * endVal) +'%');
	}

	// Fire when track loaded completely
	var afterLoad = function(){
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function(i){
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="'+item.mp3+'"><source src="'+item.ogg+'">').appendTo('#player');
		
		$('.cover').html('<img src="'+item.cover+'" alt="'+item.album+'">');
		$('.tag').html('<strong>'+item.title+'</strong><span class="artist">'+item.artist+'</span><span class="album">'+item.album+'</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.volume = $('.mute').hasClass('enable') ? 0 : volume;
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);
	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});
	$('.rewind').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(--currentTrack);
		}
	});
	$('.fastforward').on('click', function(){
		if (shuffle === 'true'){
			shufflePlay();
		} else {
			switchTrack(++currentTrack);
		}
	});
	$('#playlist li').each(function(i){
		var _i = i;
		$(this).on('click', function(){
			switchTrack(_i);
		});
	});

	if (shuffle === 'true') $('.shuffle').addClass('enable');
	if (repeat == 1){
		$('.repeat').addClass('once');
	} else if (repeat == 2){
		$('.repeat').addClass('all');
	}

	$('.repeat').on('click', function(){
		if ($(this).hasClass('once')){
			repeat = localStorage.repeat = 2;
			$(this).removeClass('once').addClass('all');
		} else if ($(this).hasClass('all')){
			repeat = localStorage.repeat = 0;
			$(this).removeClass('all');
		} else {
			repeat = localStorage.repeat = 1;
			$(this).addClass('once');
		}
	});

	$('.shuffle').on('click', function(){
		if ($(this).hasClass('enable')){
			shuffle = localStorage.shuffle = 'false';
			$(this).removeClass('enable');
		} else {
			shuffle = localStorage.shuffle = 'true';
			$(this).addClass('enable');
		}
	});
})(jQuery);

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9d2f00b533f9cca146f784443e5bfc96";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
