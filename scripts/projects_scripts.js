function displayVideoTypeInfo(type) {
    if (type === "short") {
        document.getElementById("type-info").innerHTML = `
        <p></p>
        <h1>Short Edits</h1>
        <p></p>

        <p></p>
        <p class="line"></p>
        <p></p>

        <p></p>
        <p>Features of a short edit include:</p>
        <p></p>

        <p></p>
        <div class="feature-list">
            <p>- Audio synchronization<br>
            - Simple transitions<br>
            - Simple effects<br>
            - 10-60 second video length<br>
            - Varying levels of complexity per project. If a project is too complex, it falls under Complex Montages.<br>
            - Creation typically takes 30-60 minutes per 10 seconds of video length. (~1hr/15secs)<br>
            </p>
            </p>
        </div>
        <p></p>

        <p></p>
        <p>Base rate: $5/15 seconds of video length</p>
        <p></p>

        <p></p>
        <div class="video-examples">
            <h1>Examples</h1>
            <div class="two-video-displays">
            <iframe src="https://www.youtube.com/embed/LbaZrIbyTno?si=dJ_UlB-3eXxMUfGX" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/pRRMOVELuQA?si=80A-kgwowTzmfu-k" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <p></p>
        `;
    } else if (type === "informational") {
        document.getElementById("type-info").innerHTML = `
        <p></p>
        <h1>Informational Content</h1>
        <p></p>

        <p></p>
        <p class="line"></p>
        <p></p>

        <p></p>
        <p>Features of an informational video include:</p>
        <p></p>

        <p></p>
        <div class="feature-list">
            <p>- Subtitles, if desired<br>
            - Simple transitions<br>
            - Simple effects<br>
            - Simple explanatory/demonstrative graphics<br>
            - Condensing a large amount of information into a concise video<br>
            - Creation typically takes 5-10 minutes per 10 seconds of video length. (~1hr/2mins)<br>
            </p>
        </div>
        <p></p>

        <p></p>
        <p>Base rate: $5/1 minute of video length</p>
        <p></p>

        <p></p>
        <div class="video-examples">
            <h1>Examples</h1>
            <div class="two-video-displays">
              <iframe src="https://www.youtube.com/embed/lduMm8uZIeg?si=aRKmOxmn-BoXM8Eq" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/4pnlMuNqh6Y?si=Z6uo8BhgUpxakhOS" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <p></p>
        `;
    } else if (type === "highlight") {
        document.getElementById("type-info").innerHTML = `
        <p></p>
        <h1>Highlight Reels</h1>
        <p></p>

        <p></p>
        <p class="line"></p>
        <p></p>

        <p></p>
        <p>Features of a highlight reel include:</p>
        <p></p>

        <p></p>
        <div class="feature-list">
            <p>- Subtitles, if desired (extra charge if 2+ people talking)<br>
            - Simple transitions<br>
            - Simple effects<br>
            - Creation time varies based on if you send me clips to compile or if you want me to look through a vod/video for highlights.<br>
            - Base rate is based on if you sent me clips to compile. There will be an extra charge for me to look through a vod/video.
            </p>
        </div>
        <p></p>

        <p></p>
        <p>Base rate: $2.50/1 minute of video length</p>
        <p></p>

        <p></p>
        <div class="video-examples">
            <h1>Examples</h1>
            <div class="one-video-displays">
              <iframe src="https://www.youtube.com/embed/Bn40Ay4GRqg?si=uVH9oggnbq2udMzW" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <p></p>
        `;
    } else if (type === "simple") {
        document.getElementById("type-info").innerHTML = `
        <p></p>
        <h1>Simple Music Montages</h1>
        <p></p>

        <p></p>
        <p class="line"></p>
        <p></p>

        <p></p>
        <p>Similar to a highlight reel, just more focused on beat synchronization and building the video around the song(s).
          Features of a simple montage include:</p>
        <p></p>

        <p></p>
        <div class="feature-list">
            <p>- Audio/beat synchronization<br>
              - More creative transitions<br>
              - Simple effects<br>
              - Creation time typically takes 10 minutes per 10 seconds of video length, (~1hr/1min) but may be longer depending on the degree of tedium of beat matching.
              (for example, the "Love of a Girl" montage has a high degree of tedium, while "They Should Make Rainmaker Harder" has a lower degree of tedium.)<br>
              - There will be an extra charge if a high degree of tedium is desired.
            </p>
        </div>
        <p></p>

        <p></p>
        <p>Base rate: $2/15 seconds of video length</p>
        <p></p>

        <p></p>
        <div class="video-examples">
            <h1>Examples</h1>
            <div class="three-video-displays">
              <iframe src="https://www.youtube.com/embed/g60psQkolMo?si=upn-ZMSt1cm-c6D6" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/Iqvs0h3mw2Y?si=ZOG26QvNTNTpBgoF" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/Yc-eSiRVc5Y?si=AX9SZpiO1KxLweaZ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <p></p>
        `;
    } else if (type === "complex") {
        document.getElementById("type-info").innerHTML = `
        <p></p>
        <h1>Complex Music Montages</h1>
        <p></p>

        <p></p>
        <p class="line"></p>
        <p></p>

        <p></p>
        <p>Similar to simple montages, but with more complex editing techniques and a higher degree of tedium.
          Features of a complex montage include:</p>
        <p></p>

        <p></p>
        <div class="feature-list">
            <p>- Audio/beat synchronization<br>
              - Creative transitions<br>
              - Creative effects<br>
              - Very deliberate clip placement/ordering<br>
              - Creation time typically takes 60 minutes per 10 seconds of video length.
              - Price will vary widely based on the requirements of the project.
            </p>
        </div>
        <p></p>

        <p></p>
        <p>Base rate: $10/15 seconds of video length</p>
        <p></p>

        <p></p>
        <div class="video-examples">
            <h1>Examples</h1>
            <div class="two-video-displays">
              <iframe src="https://www.youtube.com/embed/wM7xt0PpiJU?si=mqrNeMe5e2XsYIoX" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/1ctxCFBfQF4?si=50Efk0mP7BOdXW7R" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/zwsLNVd3IzQ?si=M05DFvVaGIuj3iPz" title="YouTube video player" frameborder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <iframe src="https://www.youtube.com/embed/eGsVgKylKV0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        <p></p>
        `;
    }
    document.getElementById("type-info").scrollIntoView({ behavior: "smooth" });

}