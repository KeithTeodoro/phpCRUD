<div class="backdrop"></div>
<div class="modal">
    <div class="x-container">
        <i class="fa-solid fa-x" id="exit"></i>
    </div>
    <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
        <div class="input">
            <label for="name">Name</label>
            <input type="text" placeholder="Input your name" name="name" id="name">
        </div>
        <div class="input">
            <label for="body">Post your thoughts</label>
            <textarea name="body" id="body"></textarea>
        </div>
        <button type="submit" id="buttonSubmit" name="submit">Submit</button>
    </form>
</div>
