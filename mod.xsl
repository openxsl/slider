<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="openxsl.slider">
        <!-- className 'J_OXMod' required  -->
        <div class="J_OXMod oxmod-slider" ox-mod="slider">
        	<xsl:variable name="list" select="data/ui-imglist/i[position() &lt;= 10]"/>
            <div data-on="1" data-count="{count($list)}">
		        <div class="slider-window transition">
		            <div class="slider-imgs">
		                <xsl:for-each select="$list">
		                    <a href="{href}" class="slider-img" style="background-image:url({img})">
		                        <!--
		                        <img src="{src}" title="{title}" />-->
		                    </a>
		                </xsl:for-each>
		            </div>
		        </div>
		        <div class="index-dots">
		            <xsl:for-each select="$list">
		            	<i class="dot skin-bgcolor"></i>
		            </xsl:for-each>
		        </div>
		    </div>
		      
		</div>
    </xsl:template>
</xsl:stylesheet>
