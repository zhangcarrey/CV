/**
 * Created by wcs on 2016/9/25.
 */

//����ȫ���ķ���
$(function(){
    $('#dowebok').fullpage({
        //����ÿһ��Ļ����ɫ
        sectionsColor:['#000', '#000', '#000', '#000', '#000'],
        //loopTop:true,
        // ����ĳһ��֮�����
        paddingTop: '52px',
        anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage','fifthPage'],
        menu: '#myMenu',
        afterLoad:function(link,index){
            // index ��ǰsection�ı��
            // current��Ӹ�˭ ˭��������
            $('.section').removeClass('current');
            // �ö��� �ӳ�ִ��100ms
            setTimeout(function(){
                $('.section').eq(index-1).addClass('current');
            },100);
        }
    });
});