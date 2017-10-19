@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    You are logged in!
                    <form action="" role="form" method="post" enctype="multipart/form-data"> 
                       <input type="file" name="source" id="file">
                        <?php echo method_field('POST'); ?>
        <?php echo csrf_field(); ?>
                        <button type="submit">确认上传</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
