<?php

namespace Tests\Unit;

use App\Models\Experience;
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
    public function test_can_create_experience_associated_with_user()
    {
        $user = User::factory()->create();

        // Create an experience associated with the user
        $experience = Experience::factory()->recycle($user)->create();

        $this->assertInstanceOf(Experience::class, $experience);
        $this->assertEquals($user->id, $experience->owner_id);
    }
}
