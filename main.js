$(document).ready(function () {
    $.fn.extend({
        class: function (a) {
            var t = $(this);
            return this.each(function () {
                a = String(a).split(',');
                a.map(function (s) {
                    if (s.indexOf('-') == 0) {
                        s = s.replace('-', '');
                        t.removeClass(s);
                    } else {
                        t.addClass(s);
                    }
                })
            })
        }
    });
    var cl = console.log,
        menu,
        v,
        b = $("body").append(
            $('<div>', { id: '', class: 'h1v w1 bgrn bgpc bgsc bgaf df fdc jcsc aic', style: 'background-image: url("https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.6435-9/118162402_103518688146701_2569109858403616332_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=KYEbWScH4MwAX-G3Vn3&_nc_ht=scontent.fpnh22-3.fna&oh=cc6761cd8c1bb898a84f86c92c7b477e&oe=60A6582B")', text: '' }).append(
                $('<div>', { id: '', class: 'wh150 bra50 oh bgrn bgpc bgsc bs1f ', style: 'background-image: url("https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.18169-9/11013195_1151420954873625_3690023332183914563_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=toOtzYTWmvgAX8MD55u&_nc_ht=scontent.fpnh22-3.fna&oh=755951a51c231bcf740dad3f140f715b&oe=60A6352E")', text: '' }).css({
                    backgroundSize: '150px'
                }),
                $('<div>', { id: '', class: 'cf fwb fs2 mt50 mb5 tac', text: 'Xin chào! Tôi là Bằng' }),
                $('<div>', { id: '', class: 'cf o07 fs15 mb15 tac', text: 'Ước mơ của tôi là Việt hóa cả thế giới...' }),
                $('<div>', { id: '', class: 'btn bn bgcf bra3 fs12 plr15 ptb7', text: 'Xem thêm' }).click(function () {
                    $(this).remove();
                    b.append(
                        menu = $('<div>', { id: 'menu', class: 'bgcf pf tl0 w1  bóng pr z9', text: '' }).append(
                            $('<div>', { id: '', class: 'container ', text: '' }).append(
                                $('<div>', { id: '', class: 'df jcsb', text: '' }).append(
                                    $('<div>', { id: '', class: 'grid ptb5', text: '' }).append(
                                        $('<div>', { id: '', class: 'bgrn bgpc bgsc wh50', style: 'background-image: url("https://lh3.googleusercontent.com/OULxWgvROulPbSYmCSw3koi02xqap4D79bymMeUeCnppLYfqfGtVjGio0AKHOFtGJAb3qI1si6w9fpE7BFSA9csuqpqcNbQHTl3ZuwfY_mwBhIblCCtDst9UqtU3ULl7TRfcYEBGyP_OTtKTqujUN9KzcUGMU_6NU7VAy-z-idHBhAuDwp9N0x8GTCmXTSeS4bCwTcezyDhV1W7dDEr6mcVCe0vNjQd0mzVIW2spLz5p6ZD17Ni06ynLU5UPKTCa9lZYazGgD7gLjjWGzWs1Mdw3hA8g3u2EWOb4foR-QTIhxI4ptWcPaRhrW8IsixyS0ErPU2Y3uJ3Inu8FBDFl3MeqjTBvTfOg8VZTDp7-SQLIChc_yzZ6vWV4dlb7R5AFnDIqTaywFiaM2-2OXgSylfBopryDY447SLNVbk24Xw6-bcC6gjRhbGzz4V5DloZeYhtnOOcGn9Gsjd9e1aX--GF1TThwZv95Z7TOlwuycpmesyN0DfEaEex2uSHpOJLZm_4OQEZAM6tYmadJY1fLsYWdpKMRvJEc28f2cStLpYZHvvEuUq2Ha8SIWo0jZtznl9j3KYDPVr0RLiqjzcZ9KlXBbJUVrgzFS5g0X6nCXIdaW4jQYHx7pRzhO2-MqQILY0h6GBPcOnhpN4uxBfgAJaCsHzEX3d4MWqSop1fEKqS2hRv8lwb66NFaV8rDllcuLTZhynowCm_T5DcZX99LmkA=w469-h432-no?authuser=0")', text: '' }),
                                    ),
                                    $('<div>', { id: '', class: ' menu df', text: '' }).append(
                                        $.map({
                                            i: {
                                                ê: "Giới thiệu",
                                                v: "giớiThiệu",
                                                c: "bct"
                                            },
                                            ĩ: {
                                                ê: "Kỹ năng",
                                                v: "kỹNăng"
                                            },
                                            ể: {
                                                ê: "Tiểu sử",
                                                v: 'tiểuSử'
                                            },
                                            ụ: {
                                                ê: "Mục tiêu",
                                                v: "mụcTiêu"
                                            }
                                        }, function (d, i) {
                                            return $('<div>', { view: d.v, class: 'plr25 ptb10 bgcf bấmĐc pr h1 aic df bl1 bss ' + (d.c || 'bce'), text: d.ê }).click(function () {
                                                var t = $(this),
                                                    tab = v.find('#' + d.v);
                                                t.class('active').siblings().class('-active');
                                                $('html, body').animate({
                                                    scrollTop: v.find('#' + d.v).offset().top - menu.outerHeight()
                                                }, 1000, function () {
                                                });
                                            })
                                        })
                                    ),
                                ),
                            ),
                        ),
                        v = $('<div>', { id: '', class: '', text: '' }).append(
                            $('<div>', { id: 'giớiThiệu', class: 'ptb50', text: '' }).append(
                                $('<div>', { id: '', class: 'df fww container', text: '' }).append(
                                    $('<div>', { id: '', class: 'fwb fs18 w1 pa10 mb40', text: 'Nguyễn Đăng Bằng' }),
                                    $('<div>', { id: '', class: 'col-md-6 col-xs-12 pa10', text: '' }).append(
                                        $('<div>', { id: '', class: '', text: '' }).append(
                                            [
                                                'Sinh ngày: 21/08/1993.',
                                                'Địa chỉ: Kiêu Kỵ, Gia Lâm, Hà Nội.',
                                                'Có lẽ ở độ tuổi của tôi là hơi muộn để bắt đầu với con đường học tập và làm việc về CNTT, Nhưng không sao cả muộn còn hơn là không bao giờ.',
                                                'Ngay từ bé tôi đã yêu thích CNTT. Nhưng vì nhiều lý do tôi không thể theo đuổi niềm đam mê của mình mà phải đi một con đường khác. Trải qua nhiều công việc, sử dụng nhiều phần mềm hỗ trợ công việc, nhưng những phần mềm đó luôn làm cho tôi cảm giác thiếu 1  cái gì đó và tôi đã ước gì mình có thể code để làm cho mọi thứ trở nên hoàn thiện hơn. Ước mơ chỉ trở thành hiện thực khi ta thực hiện điều đó, vì thế tôi đã quyết tâm quay trở lại để theo đuổi đam mê của mình...'
                                            ].map(function (v) {
                                                return $('<div>', { id: '', class: 'c3 fs12', text: v })
                                            })
                                        ),
                                    ),
                                    $('<div>', { id: '', class: 'col-md-6 col-xs-12 pa10', text: '' }).append(
                                        $('<div>', { id: '', class: 'h1 oh', text: '' }).append(
                                            $('<div>', { id: '', class: 'bgrn bgpc bgsc h1 phóng', style: 'background-image: url("https://timviec365.com/pictures/images/developer-la-gi-4.jpg")', text: '' }),
                                        ),
                                    ),
                                ),
                            ),
                            $('<div>', { id: 'kỹNăng', class: 'ptb50 bgcfx', text: '' }).append(
                                $('<div>', { id: '', class: 'df fww container', text: '' }).append(
                                    $('<div>', { id: '', class: 'grid tar w1', text: '' }).append(
                                        $('<div>', { id: '', class: 'fwb fs18 w50 pa10 mb40 tal', text: 'Kỹ năng' }),
                                    ),
                                    $('<div>', { id: '', class: 'col-md-6 col-xs-12 pa10', text: '' }).append(
                                        $('<div>', { id: '', class: 'df fww', text: '' }).append(
                                            [
                                                'https://logos-download.com/wp-content/uploads/2017/07/HTML5_logo-210x210.png',
                                                'https://cdn.freelogovectors.net/wp-content/uploads/2020/04/css-3-logo.png',
                                                'https://p.kindpng.com/picc/s/171-1718046_javascript-programming-language-logo-hd-png-download.png',
                                                'https://clipart.info/images/ccovers/1499794873php-logo-filled-png.png',
                                                'https://brandslogo.net/wp-content/uploads/2013/03/java-eps-vector-logo.png',
                                                'https://pvtinh.files.wordpress.com/2017/02/csharp-e7b8fcd4ce.png',
                                            ].map(function (u) {
                                                return $('<div>', { id: '', class: 'col-xs-4 oh pa5 quay', text: '' }).append(
                                                    $('<div>', { id: '', class: 'bgrn bgpc bgsc pb1 ', style: 'background-image: url(' + u + ')', text: '' }),
                                                )
                                            })
                                        ),

                                    ),
                                    $('<div>', { id: '', class: 'col-md-6 col-xs-12 pa10 df fdc jcsc', text: '' }).append(
                                        $('<div>', { id: '', class: '', text: '' }).append(
                                            $.map({
                                                html: {
                                                    ê: "HTML",
                                                    p: 70,
                                                },
                                                css: {
                                                    ê: "CSS",
                                                    p: 75,
                                                },
                                                javascript: {
                                                    ê: "Javascript",
                                                    p: 80,
                                                },
                                                php: {
                                                    ê: "PHP",
                                                    p: 40,
                                                },
                                                java: {
                                                    ê: "Java",
                                                    p: 20,
                                                },
                                                csharp: {
                                                    ê: "C#",
                                                    p: 15,
                                                },
                                            }, function (d, i) {
                                                return $('<div>', { id: '', class: 'df bónghcbss ptb15', text: '' }).append(
                                                    $('<div>', { id: '', class: 'w25 fwb fs12', text: d.ê + ':' }),
                                                    $('<div>', { id: '', class: 'bw1 bss bce  bgcf bra25 h15p w75 ta5 pr', text: '' }).append(
                                                        $('<div>', { id: '', class: 'bgcd bra25 h1 bgcb3', text: '' }).css({ width: d.p + "%" }),
                                                        $('<div>', { id: '', class: 'pa tl50 tt', text: d.p + "%" }),
                                                    )
                                                )
                                            })
                                        ),
                                    ),

                                ),
                            ),
                            $('<div>', { id: 'tiểuSử', class: 'w1 pb50 bgc0 oh', text: '' }).append(
                                $('<div>', { id: '', class: 'fwb fs18 container pa10 mt50 cf', text: 'Tiểu sử' }),
                            ).each(function () {
                                var t = $(this),
                                    o = {
                                        "1993": {
                                            ê: "Cất tiếng khóc chào đời",
                                            ô: "Tôi sinh ra và lớn lên tại Kiêu kỵ, Gia Lâm, Hà Nội",
                                            class1: "l50",
                                        },
                                        "2011": {
                                            ê: "Sinh viên tại trường Học viện Nông Nghiệp Việt Nam",
                                            ô: "Theo định hướng của gia đình, tôi thi vào 1 trường đại học gần nhà và theo học ngành Quản lý đất đai tại đây.",
                                        },
                                        "2014": {
                                            ê: "Làm việc tại Công ty Cổ phần đo đạc Địa chính và công trình Gia Huy",
                                            ô: "Quan điểm của tôi là học phải đi đôi với hành. Vì vậy ngay từ năm thứ 3 Đại học tôi đã xin vào làm việc tại CT Gia Huy.\nTại đây tôi đảm nhiệm chức vụ kỹ sư đo đạc, thực hiện công việc đo đạc thành lập hồ sơ địa chính phục vụ cho công tác cấp phát, tách, sang tên, thừa kế Giấy đăng ký quyền sử dụng đất.",
                                        },
                                        "2016": {
                                            ê: "Tham gia nghĩa vụ quân sự",
                                            ô: "Nghe theo tiếng gọi của tổ quốc, tôi đăng ký tham gia nghĩa vụ quân sự lên đường góp sức mình vào công cuộc bảo vệ quê hương đất nước.",
                                        },
                                        "2017": {
                                            ê: "Kết nạp Đảng",
                                            ô: "19/11/2017, Sau gần 2 năm học tập và rèn luyện trong quân ngũ, tôi đạt được thành tích tốt, nhận bằng khen \"Chiến sỹ tiên tiến\" và Được kết nạp vào Đảng cộng sản Việt Nam.",
                                        },
                                        "2018": {
                                            ê: "Làm việc tại Văn phòng đăng ký Đất đai huyện Gia lâm",
                                            ô: "Sau khi xuất ngũ, tôi được thầy giáo cũ trong trường Đại học giới thiệu vào làm việc tại Văn phòng đăng ký Đất đai Huyện Gia Lâm.",
                                        },
                                        "01/2019": {
                                            ê: "Làm việc tại công ty Bất động sản Tuấn 123",
                                            ô: "Không quen với môi trường nhà nước, tôi quyết định xin nghỉ và đi tìm hiểu thử một môi trường tư nhân trẻ trung năng động hơn. Tại đây tôi đã tìm hiểu và ứng dụng một vài phần mềm vào trong công việc, nhưng việc sử dụng chúng lại gặp quá nhiều vấn đề. Và rồi tôi bắt đầu có suy nghĩ ước gì mình biết code để làm ra những phần mềm hoàn thiện hơn, phục vụ công việc cho nhiều người hơn.",
                                        },
                                        "08/2019": {
                                            ê: "Sinh viên tại trường FPT Aptech",
                                            ô: "Sau nhiều lần đắn đo suy nghĩ, tôi đã quyết tâm vượt qua mọi rào cản để đi theo niềm đam mê của mình. Bắt đầu bằng việc theo học tại Trường FPT Aptech.",
                                        },
                                        "10/2019": {
                                            ê: "Làm việc tại công ty Công ty TNHH phát triển Giáo dục và Công nghệ I&E Việt Nam",
                                            ô: "Tôi vẫn giữ nguyên quan điểm học phải đi đôi với hành. Ngay sau khi học được 1 chút HTML CSS tôi xin vào thực tập và làm việc tại Công ty I&E Việt Nam. Tại đây tôi đã được đảm nhiệm và phụ trách 1 số dự án chính như: \n1. Website Lạc Hồng Viên (Cúng giỗ Online). \n2. Website ALOV Hội liên lạc người Việt Nam ở Nước ngoài.\n3. Số hóa kế toán (Phân hệ quỹ). \n4. Phát triển tiếp phần mềm Quản lý sản phẩm và xây dựng mới phần mềm CRM (Quản trị Thông tin, tình trạng khách hàng, hoạt động chăm sóc khách hàng, hợp đồng công nợ, báo giá online), \n5. Xây dựng phần mềm quản lý Công việc, Dự Án. \n6. Xây dựng phần mềm Quản lý thông tin tài khoản nhân sự, phòng ban. \n7. Phần mềm Tra cứu dữ liệu học thuật. \n8. Phần mềm tra cữu dữ liệu học thuật và quản lý thông tin các Nhà khoa học",
                                        },
                                        "2021": {
                                            ê: "Đến nay",
                                            ô: "...",
                                            class1: "r50",
                                        },
                                        timeline: ["1993", "2011", "2014", "2016", "2017", "2018", "01/2019", "08/2019", "10/2019", "2021"]
                                    };
                                t.append(
                                    $('<div>', { id: '', class: 'ta5 w0 pr ox', text: '' }).css({ marginLeft: "50%" }).append(
                                        $('<div>', { id: '', class: 'fs2 pa t1 l50 cf', text: '▴' }).css({ transform: "translateX(-25%)" }),
                                        $('<div>', { id: '', class: ' grid wsn ta5', text: '' }).append(
                                            $.map(o.timeline, function (i, ind, d) {
                                                d = o[i];
                                                return $('<div>', { c: i, class: 'ptb40 plr40 fs2 cf pr bấmĐc cb3h ttx tac', text: i }).width(200).append(
                                                    $('<div>', { id: '', class: 'pa h1p w1 bgcf ' + (d.class1 || 'l0'), text: '' }).css({ bottom: "6px" }),
                                                    $('<div>', { id: '', class: 'wh11 bra50 bgcf pa l50 tty-50', text: '' }).css({ bottom: "6px" }),
                                                ).click(function () {
                                                    var c = $(this),
                                                        p = c.parent(),
                                                        lt = c.offset().left,
                                                        lp = p.offset().left,
                                                        o = p.parent(),
                                                        timeline = t.find('.viewTimeline'),
                                                        s = lp - lt - c.width() + 20;
                                                    timeline.animate({
                                                        scrollLeft: ind * timeline.children('[timeline="' + i + '"]').width()
                                                    }, 500)
                                                    p.css({ transform: "translateX(" + s + "px)" });
                                                });
                                            })
                                        ),
                                    ),
                                    $('<div>', { id: '', class: 'df oh viewTimeline', text: '' }).append(
                                        $.map(o.timeline, function (i, ind, d) {
                                            d = o[i];
                                            return $('<div>', { timeline: i, class: 'w1 dfs0', text: '' }).append(
                                                $('<div>', { id: '', class: 'container pa50 h1', text: '' }).append(
                                                    $('<div>', { id: '', class: 'bra5 bgcf pa15 plr40 h1', text: '' }).append(
                                                        $('<div>', { id: '', class: 'fs15 fwb pa25 tac', text: d.ê }),
                                                        $('<div>', { id: '', class: 'wspw', text: d.ô }),
                                                    ),
                                                ),
                                            )
                                        })
                                    ),
                                )
                            }),
                            $('<div>', { id: 'mụcTiêu', class: 'ptb50', text: '' }).append(
                                $('<div>', { id: '', class: 'df fww container', text: '' }).append(
                                    $('<div>', { id: '', class: 'grid tar w1', text: '' }).append(
                                        $('<div>', { id: '', class: 'fwb fs18 w50 pa10 mb40 tal', text: 'Mục tiêu' }),
                                    ),
                                    $('<div>', { id: '', class: 'col-md-6 col-xs-12 pa10', text: '' }).append(
                                        $('<div>', { id: '', class: 'h1 oh', text: '' }).append(
                                            $('<div>', { id: '', class: 'bgrn bgpc bgsc h1 phóng', style: 'background-image: url("https://mk0goodhirecomxdfa5r.kinstacdn.com/wp-content/uploads/2020/10/Blog-4-ways-background-checks-help-with-future-hiring.png")', text: '' }),
                                        ),
                                    ),
                                    $('<div>', { id: '', class: 'col-md-6 col-xs-12 pa10', text: '' }).append(
                                        $('<div>', { id: '', class: '', text: '' }).append(
                                            [
                                                'Ước mơ của tôi là Việt hóa cả thế giới.',
                                                'Có lẽ bạn nghĩ tôi điên. Nhưng tôi nghĩ, nếu có đủ khả năng có đủ năng lực và niềm tự hào dân tộc thì chúng ta sẽ làm được việc đó.',
                                                'Ở cái thời đại cuộc sống số. Số hóa giáo dục, số hóa y tế, số hóa doanh nghiệp, cúng giỗ, thắp hương online... Nếu tôi có một phần mềm Tối ưu phục vụ lợi ích cho hàng tỷ người mà không một quốc gia nào có, phần mềm đấy chỉ sử dụng Tiếng Việt muốn sử dụng nó phải học Tiếng Việt.',
                                                'Tôi có 1 ngôn ngữ lập trình mới, giải quyết hàng nghìn bài toán khó với hiệu suất nhanh nhất mà không ngôn ngữ nào bằng. Nhưng ngôn ngữ đấy lại viết bằng Tiếng Việt, muốn sử dụng nó thì phải học tiếng Việt.',
                                                'Đó là cách mà tôi sẽ thực hiện ước mơ của mình, và cũng là mục tiêu để tôi phấn đấu. Xây dựng lên những phần mềm phục vụ giúp đỡ cho công việc của nhiều người hơn. Tạo cho mình 1 ngôn ngữ lập trình mới tối ưu hơn.'
                                            ].map(function (v) {
                                                return $('<div>', { id: '', class: 'c3 fs12', text: v })
                                            })
                                        ),
                                    ),

                                ),
                            ),
                            $('<div>', { id: 'liênHệ', class: 'ptb50 bgc3', text: '' }).append(
                                $('<div>', { id: '', class: 'container', text: '' }).append(
                                    $('<div>', { id: '', class: 'fwb fs18 w1 pa10 mb40 cf tac', text: 'Liên hệ' }),
                                    $('<div>', { id: '', class: 'grid', text: '' }).append(
                                        [
                                            {
                                                icon: "fa fa-phone",
                                                text: "Di động: \n0989.859.398",
                                                href: "tel:0989859398"
                                            },
                                            {
                                                icon: "fa fa-envelope",
                                                text: "Email: \nnguyendangbanghn@gmail.com",
                                                href: "mailto:nguyendangbanghn@gmail.com"
                                            },
                                            {
                                                icon: "fa fa-github",
                                                text: "Github: \nhttps://github.com/nguyendangbanghn93",
                                                href: "https://github.com/nguyendangbanghn93"
                                            },
                                        ].map(function (d, i) {
                                            return $('<div>', { id: '', class: 'col-md-4 col-xs-12 pa10 grid tac', text: '' }).append(
                                                $('<div>', { id: '', class: '', text: '' }).append($('<a>', { href: d.href, class: 'df aic', text: '' }).append(
                                                    $('<div>', { id: '', class: 'pa15 bra50 bgcf', text: '' }).html('<i class="' + d.icon + '" aria-hidden="true"></i>'),
                                                    $('<div>', { id: '', class: 'wspw cf ml15', text: d.text }),
                                                )),
                                            )
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    );
                    menu.find('[view="' + v.find('#giớiThiệu').attr('id') + '"]').class('active').siblings().class('-active');
                    $('html, body').animate({
                        scrollTop: v.find('#giớiThiệu').offset().top - menu.outerHeight()
                    }, 1000, function () {
                    });
                }),
            ),
        );
})