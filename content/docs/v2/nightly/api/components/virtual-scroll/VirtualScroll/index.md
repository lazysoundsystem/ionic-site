---
layout: "v2_fluid/docs_base"
version: "nightly"
versionHref: "/docs/v2/nightly"
path: ""
category: api
id: "virtualscroll"
title: "VirtualScroll"
header_sub_title: "Ionic API Documentation"
doc: "VirtualScroll"
docType: "class"

---









<h1 class="api-title">
<a class="anchor" name="virtual-scroll" href="#virtual-scroll"></a>

VirtualScroll
<h3><code>[virtualScroll]</code></h3>






</h1>

<a class="improve-v2-docs" href="http://github.com/driftyco/ionic/edit/master//src/components/virtual-scroll/virtual-scroll.ts#L10">
Improve this doc
</a>






<p>Virtual Scroll displays a virtual, &quot;infinite&quot; list. An array of records
is passed to the virtual scroll containing the data to create templates
for. The template created for each record, referred to as a cell, can
consist of items, headers, and footers.</p>
<p>For performance reasons, not every record in the list is rendered at once;
instead a small subset of records (enough to fill the viewport) are rendered
and reused as the user scrolls.</p>
<h3 id="the-basics">The Basics</h3>
<p>The array of records should be passed to the <code>virtualScroll</code> property.
The data given to the <code>virtualScroll</code> property must be an array. An item
template with the <code>*virtualItem</code> property is required in the <code>virtualScroll</code>.
The <code>virtualScroll</code> and <code>*virtualItem</code> properties can be added to any element.</p>
<pre><code class="lang-html">&lt;ion-list [virtualScroll]=&quot;items&quot;&gt;

  &lt;ion-item *virtualItem=&quot;let item&quot;&gt;
    {% raw %}{{ item }}{% endraw %}
  &lt;/ion-item&gt;

&lt;/ion-list&gt;
</code></pre>
<h3 id="section-headers-and-footers">Section Headers and Footers</h3>
<p>Section headers and footers are optional. They can be dynamically created
from developer-defined functions. For example, a large list of contacts
usually has a divider for each letter in the alphabet. Developers provide
their own custom function to be called on each record. The logic in the
custom function should determine whether to create the section template
and what data to provide to the template. The custom function should
return <code>null</code> if a template shouldn&#39;t be created.</p>
<pre><code class="lang-html">&lt;ion-list [virtualScroll]=&quot;items&quot; [headerFn]=&quot;myHeaderFn&quot;&gt;

  &lt;ion-item-divider *virtualHeader=&quot;let header&quot;&gt;
    Header: {% raw %}{{ header }}{% endraw %}
  &lt;/ion-item-divider&gt;

  &lt;ion-item *virtualItem=&quot;let item&quot;&gt;
    Item: {% raw %}{{ item }}{% endraw %}
  &lt;/ion-item&gt;

&lt;/ion-list&gt;
</code></pre>
<p>Below is an example of a custom function called on every record. It
gets passed the individual record, the record&#39;s index number,
and the entire array of records. In this example, after every 20
records a header will be inserted. So between the 19th and 20th records,
between the 39th and 40th, and so on, a <code>&lt;ion-item-divider&gt;</code> will
be created and the template&#39;s data will come from the function&#39;s
returned data.</p>
<pre><code class="lang-ts">myHeaderFn(record, recordIndex, records) {
  if (recordIndex % 20 === 0) {
    return &#39;Header &#39; + recordIndex;
  }
  return null;
}
</code></pre>
<h3 id="approximate-widths-and-heights">Approximate Widths and Heights</h3>
<p>If the height of items in the virtual scroll are not close to the
default size of 40px, it is extremely important to provide an value for
approxItemHeight height. An exact pixel-perfect size is not necessary,
but without an estimate the virtual scroll will not render correctly.</p>
<p>The approximate width and height of each template is used to help
determine how many cells should be created, and to help calculate
the height of the scrollable area. Note that the actual rendered size
of each cell comes from the app&#39;s CSS, whereas this approximation
is only used to help calculate initial dimensions.</p>
<p>It&#39;s also important to know that Ionic&#39;s default item sizes have
slightly different heights between platforms, which is perfectly fine.</p>
<h3 id="images-within-virtual-scroll">Images Within Virtual Scroll</h3>
<p>Ionic provides <code>&lt;ion-img&gt;</code> to manage HTTP requests and image rendering.
Additionally, it includes a customizable placeholder element which shows
before the image has finished loading. While scrolling through items
quickly, <code>&lt;ion-img&gt;</code> knows not to make any image http requests, and only
loads the images that are viewable after scrolling.</p>
<p>It&#39;s also important for app developers to ensure image sizes are locked in,
and after images have fully loaded they do not change size and affect any
other element sizes. Simply put, to ensure rendering bugs are not introduced,
it&#39;s vital that elements within a virtual item does not dynamically change.</p>
<p>We recommend using our <code>&lt;ion-img&gt;</code> element over the native <code>&lt;img&gt;</code> element
because when an <code>&lt;img&gt;</code> element is added to the DOM, it immediately
makes a HTTP request for the image file. HTTP requests, image
decoding, and image rendering can cause issues while scrolling. For virtual
scrolling, the natural effects of the <code>&lt;img&gt;</code> are not desirable features.</p>
<p>Note: <code>&lt;ion-img&gt;</code> should only be used with Virtual Scroll. If you are using
an image outside of Virtual Scroll you should use the standard <code>&lt;img&gt;</code> tag.</p>
<pre><code class="lang-html">&lt;ion-list [virtualScroll]=&quot;items&quot;&gt;

  &lt;ion-item *virtualItem=&quot;let item&quot;&gt;
    &lt;ion-avatar item-left&gt;
      &lt;ion-img [src]=&quot;item.avatarUrl&quot;&gt;&lt;/ion-img&gt;
    &lt;/ion-avatar&gt;
   {% raw %} {{ item.firstName }} {{ item.lastName }}{% endraw %}
  &lt;/ion-item&gt;

&lt;/ion-list&gt;
</code></pre>
<h3 id="custom-components">Custom Components</h3>
<p>If a custom component is going to be used within Virtual Scroll, it&#39;s best
to wrap it with a good old <code>&lt;div&gt;</code> to ensure the component is rendered
correctly. Since each custom component&#39;s implementation and internals can be
quite different, wrapping within a <code>&lt;div&gt;</code> is a safe way to make sure
dimensions are measured correctly.</p>
<pre><code class="lang-html">&lt;ion-list [virtualScroll]=&quot;items&quot;&gt;

  &lt;div *virtualItem=&quot;let item&quot;&gt;
    &lt;my-custom-item [item]=&quot;item&quot;&gt;
      {% raw %} {{ item }}{% endraw %}
    &lt;/my-custom-item&gt;
  &lt;/div&gt;

&lt;/ion-list&gt;
</code></pre>
<h3 id="performance-tips">Performance Tips</h3>
<ul>
<li>When deploying to iOS with Cordova, it&#39;s highly recommended to use the
<a href="http://blog.ionic.io/cordova-ios-performance-improvements-drop-in-speed-with-wkwebview/">WKWebView plugin</a>
in order to take advantage of iOS&#39;s higher performimg webview.</li>
<li>Use <code>&lt;ion-img&gt;</code> rather than <code>&lt;img&gt;</code> so images are lazy loaded
while scrolling.</li>
<li>Image sizes should be locked in, meaning the size of any element
should not change after the image has loaded.</li>
<li>For the most part, ensure the element size for each virtual item
does not dynamically change, but rather, their size must already be
locked in via CSS at the time they are rendered.</li>
<li>Provide an approximate width and height so the virtual scroll can
best calculate the cell height.</li>
<li>Changing the dataset requires the entire virtual scroll to be
reset, which is an expensive operation and should be avoided
if possible.</li>
<li>Do not perform any DOM manipulation within section header and
footer functions. These functions are called for every record in the
dataset, so please make sure they&#39;re performant.</li>
</ul>




<!-- @usage tag -->


<!-- @property tags -->



<!-- instance methods on the class -->

<h2><a class="anchor" name="instance-members" href="#instance-members"></a>Instance Members</h2>

<div id="readUpdate"></div>

<h3>
<a class="anchor" name="readUpdate" href="#readUpdate"></a>
<code>readUpdate()</code>
  

</h3>












<div id="writeUpdate"></div>

<h3>
<a class="anchor" name="writeUpdate" href="#writeUpdate"></a>
<code>writeUpdate()</code>
  

</h3>











<!-- input methods on the class -->
<h2><a class="anchor" name="input-properties" href="#input-properties"></a>Input Properties</h2>
<table class="table param-table" style="margin:0;">
  <thead>
    <tr>
      <th>Attr</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>virtualScroll</td>
      <td><code>array</code></td>
      <td><p> The data that builds the templates within the virtual scroll.
This is the same data that you&#39;d pass to <code>*ngFor</code>. It&#39;s important to note
that when this data has changed, then the entire virtual scroll is reset,
which is an expensive operation and should be avoided if possible.</p>
</td>
    </tr>
    
    <tr>
      <td>bufferRatio</td>
      <td><code>number</code></td>
      <td><p> The buffer ratio is used to decide how many cells
should get created when initially rendered. The number is a
multiplier against the viewable area&#39;s height. For example, if it
takes <code>20</code> cells to fill up the height of the viewable area, then
with a buffer ratio of <code>3</code> it will create <code>60</code> cells that are
available for reuse while scrolling. For better performance, it&#39;s
better to have more cells than what are required to fill the
viewable area. Default is <code>3</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>approxItemWidth</td>
      <td><code>string</code></td>
      <td><p> The approximate width of each item template&#39;s cell.
This dimension is used to help determine how many cells should
be created when initialized, and to help calculate the height of
the scrollable area. This value can use either <code>px</code> or <code>%</code> units.
Note that the actual rendered size of each cell comes from the
app&#39;s CSS, whereas this approximation is used to help calculate
initial dimensions before the item has been rendered. Default is
<code>100%</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>approxItemHeight</td>
      <td><code>string</code></td>
      <td><p> It is important to provide this
if virtual item height will be significantly larger than the default
The approximate height of each virtual item template&#39;s cell.
This dimension is used to help determine how many cells should
be created when initialized, and to help calculate the height of
the scrollable area. This height value can only use <code>px</code> units.
Note that the actual rendered size of each cell comes from the
app&#39;s CSS, whereas this approximation is used to help calculate
initial dimensions before the item has been rendered. Default is
<code>40px</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>approxHeaderWidth</td>
      <td><code>string</code></td>
      <td><p> The approximate width of each header template&#39;s cell.
This dimension is used to help determine how many cells should
be created when initialized, and to help calculate the height of
the scrollable area. This value can use either <code>px</code> or <code>%</code> units.
Note that the actual rendered size of each cell comes from the
app&#39;s CSS, whereas this approximation is used to help calculate
initial dimensions. Default is <code>100%</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>approxHeaderHeight</td>
      <td><code>string</code></td>
      <td><p> The approximate height of each header template&#39;s cell.
This dimension is used to help determine how many cells should
be created when initialized, and to help calculate the height of
the scrollable area. This height value can only use <code>px</code> units.
Note that the actual rendered size of each cell comes from the
app&#39;s CSS, whereas this approximation is used to help calculate
initial dimensions before the item has been rendered. Default is <code>40px</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>approxFooterWidth</td>
      <td><code>string</code></td>
      <td><p> The approximate width of each footer template&#39;s cell.
This dimension is used to help determine how many cells should
be created when initialized, and to help calculate the height of
the scrollable area. This value can use either <code>px</code> or <code>%</code> units.
Note that the actual rendered size of each cell comes from the
app&#39;s CSS, whereas this approximation is used to help calculate
initial dimensions before the item has been rendered. Default is <code>100%</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>approxFooterHeight</td>
      <td><code>string</code></td>
      <td><p> The approximate height of each footer template&#39;s cell.
This dimension is used to help determine how many cells should
be created when initialized, and to help calculate the height of
the scrollable area. This height value can only use <code>px</code> units.
Note that the actual rendered size of each cell comes from the
app&#39;s CSS, whereas this approximation is used to help calculate
initial dimensions before the item has been rendered. Default is <code>40px</code>.</p>
</td>
    </tr>
    
    <tr>
      <td>headerFn</td>
      <td><code>function</code></td>
      <td><p> Section headers and the data used within its given
template can be dynamically created by passing a function to <code>headerFn</code>.
For example, a large list of contacts usually has dividers between each
letter in the alphabet. App&#39;s can provide their own custom <code>headerFn</code>
which is called with each record within the dataset. The logic within
the header function can decide if the header template should be used,
and what data to give to the header template. The function must return
<code>null</code> if a header cell shouldn&#39;t be created.</p>
</td>
    </tr>
    
    <tr>
      <td>footerFn</td>
      <td><code>function</code></td>
      <td><p> Section footers and the data used within its given
template can be dynamically created by passing a function to <code>footerFn</code>.
The logic within the footer function can decide if the footer template
should be used, and what data to give to the footer template. The function
must return <code>null</code> if a footer cell shouldn&#39;t be created.</p>
</td>
    </tr>
    
    <tr>
      <td>virtualTrackBy</td>
      <td><code>function</code></td>
      <td><p> Same as <code>ngForTrackBy</code> which can be used on <code>ngFor</code>.</p>
</td>
    </tr>
    
  </tbody>
</table>




<!-- related link --><!-- end content block -->


<!-- end body block -->

