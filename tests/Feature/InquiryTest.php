<?php

namespace Tests\Unit;

use App\Models\Inquiry;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExperienceTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_can_create_inquiry_associated_with_user()
    {
        $user = User::factory()->create();

        // Create an experience associated with the user
        $experience = Inquiry::factory()->recycle($user)->create();

        $this->assertInstanceOf(Inquiry::class, $experience);
        $this->assertEquals($user->id, $experience->owner_id);
    }
}
