(function () {
    var flags = [].slice.call(document.querySelectorAll('.flag')), seen = {}, note = document.getElementById('note'), cnt = document.getElementById('count');
    flags.forEach(function (f, i) { f.addEventListener('click', function () { flags.forEach(function (x) { x.classList.remove('on') }); f.classList.add('on'); note.textContent = f.getAttribute('data-n'); seen[i] = 1; var n = Object.keys(seen).length; cnt.textContent = n + ' of ' + flags.length + ' warning signs found' + (n === flags.length ? '. Great eye!' : '') }) });

    var urls = [["https://www.paypal.com/signin", true, "Correct: the domain is paypal.com, and the rest is just a page path."], ["https://paypa1.com/signin", false, "Fake: the letter l is swapped for the number 1."], ["https://secure-login.amazon.com.account-check.net", false, "Fake: the real domain is the last part before the path, account-check.net. “amazon.com” is just a decoy at the front."], ["https://accounts.google.com", true, "Correct: accounts.google.com is a real subdomain of google.com."]];
    var ui = 0, us = 0, ub = document.getElementById('urlbox');
    function showUrl() {
        if (ui >= urls.length) { ub.innerHTML = '<h3>You got ' + us + ' of ' + urls.length + '</h3><p>Tip: read the address from the end of the domain backwards, and look for swapped letters.</p><button class="btn primary" id="ur">Try again</button>'; document.getElementById('ur').onclick = function () { ui = 0; us = 0; showUrl() }; return }
        ub.innerHTML = '<div class="url"></div><div class="row2"><button class="btn" data-a="1">Real</button><button class="btn" data-a="0">Fake</button></div><div id="uf" aria-live="polite"></div>';
        ub.querySelector('.url').textContent = urls[ui][0];
        [].slice.call(ub.querySelectorAll('[data-a]')).forEach(function (b) { b.onclick = function () { var ok = (b.dataset.a === '1') === urls[ui][1]; if (ok) us++;b.classList.add(ok?'right':'wrong');if(!ok) {ub.querySelector('[data-a=" '+(urls[ui][1]?1:0)+' "]').classList.add('right')}ub.querySelectorAll('[data-a]').forEach(function (x) { x.disabled = true }); document.getElementById('uf').innerHTML = '<div class="fb ' + (ok ? 'ok' : 'no') + '">' + (ok ? 'Right. ' : 'Not quite. ') + urls[ui][2] + '</div><p></p><button class="btn primary" id="un">Next</button>'; document.getElementById('un').onclick = function () { ui++; showUrl() } } })
    }
    showUrl();

    var Q = [
        ["An email says “Your account closes in 2 hours! Click here.” What’s the best move?", ["Click quickly so it isn’t closed", "Reply asking if it’s real", "Ignore the link and log in through the official site or app", "Forward it to friends"], 2, "Urgency is a pressure tactic. Go to the official site yourself."],
        ["Which sender address is most likely fake?", ["support@paypal.com", "help@paypa1-secure.co", "no-reply@accounts.google.com", "service@amazon.com"], 1, "“paypa1” uses a number 1 and an unrelated domain."],
        ["A caller says they’re from your bank and asks for the OTP you just received. You should…", ["Share it to prove it’s you", "Hang up and call the bank’s official number", "Share only half of it", "Ask them to email you"], 1, "Banks never need your OTP. Anyone asking for it is a scammer."],
        ["Does the padlock and https:// mean a website is safe?", ["Yes, always", "No, scam sites can use HTTPS too", "Only on mobile", "Only for banks"], 1, "HTTPS only means the connection is encrypted. It says nothing about who runs the site."],
        ["Before clicking a link in an email, you should…", ["Check where it really goes (hover or press and hold)", "Check the email’s font", "Count the words", "Click, then check"], 0, "The visible text can say one thing while the link goes elsewhere."],
        ["You clicked a suspicious link and typed your password. First step?", ["Do nothing", "Change that password now and tell your bank or IT team", "Delete the email only", "Restart the phone"], 1, "Act fast: change the password (and anywhere you reused it), turn on 2FA, report it."]];
    var qi = 0, qs = 0, qb = document.getElementById('qbox'), bar = document.getElementById('bar');
    function showQ() {
        bar.style.width = (qi / Q.length * 100) + '%';
        if (qi >= Q.length) { var m = qs >= 5 ? 'Excellent. You’d be hard to phish.' : qs >= 3 ? 'Good start. Review the tips below and try again.' : 'Read the sections above and retry. Everyone starts here.'; qb.innerHTML = '<h3>Score: ' + qs + ' / ' + Q.length + '</h3><p>' + m + '</p><button class="btn primary" id="qr">Restart quiz</button>'; document.getElementById('qr').onclick = function () { qi = 0; qs = 0; showQ() }; return }
        var q = Q[qi]; qb.innerHTML = '<p style="color:var(--mute);margin-bottom:6px">Question ' + (qi + 1) + ' of ' + Q.length + '</p><h3></h3><div id="opts"></div><div id="qf" aria-live="polite"></div>';
        qb.querySelector('h3').textContent = q[0];
        q[1].forEach(function (t, i) { var b = document.createElement('button'); b.className = 'btn'; b.textContent = t; b.onclick = function () { var ok = i === q[2]; if (ok) qs++; var all = qb.querySelectorAll('#opts .btn'); all.forEach(function (x, j) { x.disabled = true; if (j === q[2]) x.classList.add('right') }); if (!ok) b.classList.add('wrong'); document.getElementById('qf').innerHTML = '<div class="fb ' + (ok ? 'ok' : 'no') + '">' + (ok ? 'Correct. ' : 'Not quite. ') + q[3] + '</div><p></p><button class="btn primary" id="qn">' + (qi === Q.length - 1 ? 'See score' : 'Next question') + '</button>'; document.getElementById('qn').onclick = function () { qi++; showQ() } }; qb.querySelector('#opts').appendChild(b) })
    }
    showQ();
})();