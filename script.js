$(document).ready(function(){
       var allListElements = $( ".tree  li" );  
       $('.tree  li:not(.active) a:not(.link)').on('click', function(e){
         e.preventDefault();
         $(this).parents('li').addClass('active');
         $('.tree ul li.tree-header li:not(.top-level) li:not(.active)').addClass('hide');
         $(this).parent().addClass('active');
        //  $('.tree li.tree-header li:not(.top-level) ').addClass('hide');
         $(this).parent().find(allListElements).toggleClass('hide')
       })
     });
     
     
     function showData(component) {
      var data = "";
      switch (component) {
          case 'Online':
              data = "<p class='data-info'>The Online component of B2C involves conducting market research through various online channels, such as the company website, social media platforms, and online surveys. This includes analyzing website traffic, user engagement metrics, and customer feedback obtained through online interactions. Strategies such as search engine optimization (SEO), pay-per-click (PPC) advertising, and email marketing are utilized to reach and engage with target audiences online.</p>";
              break;
          case 'Interview':
              data = "<p class='data-info'>The Interview component of B2C involves gathering insights from direct conversations with potential customers. This may include structured interviews, focus groups, or one-on-one discussions to understand their needs, preferences, and pain points related to the new vehicle. Through interviews, companies can gain qualitative data that complements quantitative data collected through other market research methods.</p>";
              break;
          case 'PublicData':
              data = "<p class='data-info'>The Public Data component of B2C involves analyzing publicly available data sources, such as government databases, industry reports, and market research publications. This data can provide valuable insights into broader market trends, consumer behavior patterns, regulatory requirements, and competitive landscapes. By leveraging public data, companies can enhance their understanding of market dynamics and make informed decisions.</p>";
              break;
          case 'Health':
              data = "<p class='data-info'>The Health component of B2C may refer to analyzing data related to the healthcare industry, such as trends in consumer preferences for eco-friendly or health-conscious features in vehicles. Understanding health-related concerns and preferences among target demographics can influence product design, marketing strategies, and positioning in the market. This data can be obtained through surveys, focus groups, and collaboration with healthcare professionals.</p>";
              break;
      }
      document.getElementById('data-container').innerHTML = data;
  }