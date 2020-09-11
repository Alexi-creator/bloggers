let gulp = require('gulp'),						// объявляем переменную gulp название любое, и заносим в эту переменную название модуля для таска т.е. gulp данное название пишется строго как называется модуль который мы скачивали
	sass = require('gulp-sass'),				// модуль для конвертирования из scss в css, сначала скачиваем модуль npm i gulp-sass --save-dev, --save-dev это для того чтобы сохранить зависимость всех скаченных модулей и их версий в json
	browserSync = require('browser-sync'),		// сначала скачиваем данный модуль и подключаем в переменную, модуль для обновления страницы браузера		
	uglify = require('gulp-uglify'),			// сначала скачиваем npm i gulp-uglify --save-dev, нужен для сжатия (минификации js файлов)
	concat = require('gulp-concat'),			// сначала скачиваем, нужен для объединения файлов в один файл
	rename = require('gulp-rename'),			// плагин для переименования файлов, сначала скачиваем!
	del = require('del'),									// удаляет папки, в нашем случае удаляет всю папку dist
	autoprefixer = require('gulp-autoprefixer'),	// расставляет префиксы для разных браузеров
	babel = require('gulp-babel');				// преобразовывет js в старый всеми поддерживаемый формат

gulp.task('clean', async function(){  	// удаляет папку, async означает что будет данный таск выполнятся первый
	del.sync('dist')
});

gulp.task('scss', function(){								// scss это название любое, т.к это название нашего таска которое мы сами придумываем
	return gulp.src('app/scss/**/*.scss')			// берем все файлы scss (или sass если указать вместо scss) из папки scss и всех вложенных папках в ней 
	.pipe(sass({outputStyle: 'compressed'}))	// применяем модуль на наши взятые файлы, sass это название нашей переменной к которой подключен модуль sass, он конвертирует в css, {outputStyle: 'compressed'} - это сжатие файла минификация
	.pipe(autoprefixer({
		grid: true,
		overrideBrowserslist: ['last 5 versions'],
		cascade: true
	}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'))					// выгружаем результат модуля в папку (он сам создаст название папки)
	.pipe(browserSync.reload({stream: true}))	// данная команда следит за файлами scss если есть изминения то обновляет БРАУЗЕР!
});

gulp.task('css', function(){					// таск для объединения сcs файлов
	return gulp.src([
	'node_modules/normalize.css/normalize.css',		// normalize.css файл со сбрасывающими настройками, импортируем в данный файл style.scss все содержимое из файла по указанной директории
	'node_modules/slick-carousel/slick/slick.css',	// это файл с настройками для слайдера slick
	'node_modules/simplebar/dist/simplebar.min.css'		// нестандартный скроллбар
	])
	.pipe(concat('_libs.scss'))					// объединяем все файлы которые выбрали сверху и называем их _libs.scss
	.pipe(gulp.dest('app/scss'))				// и выгружаем в нужную папку 
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){					// создаем таск с своим названием html
	return gulp.src('app/*.html')				// берем файл с которыми будем работать
	.pipe(browserSync.reload({stream: true}))	// обновит окно брузера если запустится данный таск, а запустится он в случае если watch заметит изменения в файлах
});

gulp.task('script', function(){					// создаем таск 
	return gulp.src('app/jsall/*.js')				// берем файл с которыми будем работать
	.pipe(concat('main.js'))
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream: true}))	// обновит окно брузера если запустится данный таск, а запустится он в случае если watch заметит изменения в файлах
});

gulp.task('js', function() {					// таск для файлов js 
	return gulp.src([							// подключаем файлы в квадратных скобках т.к. они находятся в разных папках, указываем директории через запатые
	'node_modules/slick-carousel/slick/slick.js',
	'node_modules/simplebar/dist/simplebar.js',
	])
	.pipe(concat('libs.js'))				// далее эти файлы конкатенируем в один файл с названием libs.min.js
	.pipe(gulp.dest('app/jsall'))					// и выгружаем в нужную папку которую прописываем
	.pipe(browserSync.reload({stream: true}))
});


gulp.task('browser-sync', function() {			// скачиваем данный модуль, данный таск обновляет страницу браузера при изменении файлов (например scss, html итд)
    browserSync.init({
        server: {
            baseDir: "app/"									// указываем директорию нашего сайта для создания сервера
        }
    });
});

gulp.task('export', function(){ 						// данный таск запускаем в конце после того как всю верстку уже сделали, он перенесет все нужные файлы для заливки на хостинг (html, css, js, img, fonts итд) в папку dist
	let buildHtml = gulp.src('app/**/*.html')
	.pipe(gulp.dest('dist'))

	let buildCss = gulp.src('app/css/**/*.css')
	.pipe(gulp.dest('dist/css'))

	let buildJS = gulp.src('app/js/*.js')
	.pipe(concat('main.js'))
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))

	let buildFonts = gulp.src('app/fonts/**/*.*')	// *.* означает что любые файлы с любым расширением
	.pipe(gulp.dest('dist/fonts'))

	let buildImg = gulp.src('app/img/**/*.*')
	.pipe(gulp.dest('dist/img'))
});

gulp.task('watch', function(){									// модуль watch скачивать не нужно он уже встроеный
	gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))		// следит за файлами по данной директории и если были изменения запускает таск параллельно scss т.к. watch уже открыт в терминале
	gulp.watch('app/*.html', gulp.parallel('html'))						// следит за файлами по данной директории и если были изменения запускает таск параллельно html в котором будет обновление браузера
	gulp.watch('app/jsall/*.js', gulp.parallel('script'))
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'));	// default это имя встроенного браузера чтобы его запустить в терминале пишем просто gulp, данный таск запускает одновременно таски, сначала стили и js файлы затем сервер запустится и потом начнется слежени watch






